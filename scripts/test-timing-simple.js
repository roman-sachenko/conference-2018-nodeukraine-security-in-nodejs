#!/usr/bin/env node

const http = require("http");

const makeRequest = (path, data = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: data ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
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
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
};

const testTimingAttack = async () => {
  console.log("Testing Basic String Timing Attack");
  console.log("=".repeat(50));

  console.log("Testing progressive word matching...");
  
  // Test progressive word matching against the long target string
  const testPasswords = [
    "take",                 // 1 word - should be fast
    "take a",               // 2 words - should be medium
    "take a look",          // 3 words - should be medium
    "take a look to",       // 4 words - should be medium
    "take a look to the",   // 5 words - should be medium
    "take a look to the sky", // 6 words - should be slowest (full match)
    "x",                    // 1 char - should be fast (no match)
    "admin",                // 1 word - should be fast (no match)
    "password",             // 1 word - should be fast (no match)
    "hello",                // 1 word - should be fast (no match)
    "world"                 // 1 word - should be fast (no match)
  ];

  const results = [];

  for (const password of testPasswords) {
    console.log(`\nTesting: "${password}"`);
    
    const times = [];
    const nanoTimes = [];
    
    // Make 5 requests to get better average timing
    for (let i = 0; i < 5; i++) {
      try {
        const startTime = Date.now();
        const result = await makeRequest('/attacks/timing/', { password, compareByChar: true });
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        times.push(responseTime);
        nanoTimes.push(result.fullDiff);
        
        console.log(`   Request ${i + 1}: ${responseTime}ms (Timing: ${result.fullDiff}ns)`);
        
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.log(`   Error: ${error.message}`);
      }
    }
    
    if (times.length > 0) {
      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      const avgNanoTime = nanoTimes.reduce((a, b) => a + b, 0) / nanoTimes.length;
      
      results.push({
        password,
        avgTime: avgTime.toFixed(2),
        avgNanoTime: avgNanoTime.toFixed(0),
        found: password === "take a look to the sky"
      });
      
      console.log(`   Average: ${avgTime.toFixed(2)}ms (${avgNanoTime}ns)`);
    }
  }

  // Show results summary
  console.log("\n" + "=".repeat(50));
  console.log("TIMING ATTACK RESULTS:");
  console.log("=".repeat(50));
  
  results.forEach(result => {
    const status = result.found ? "MATCH" : "NO MATCH";
    console.log(`${status} "${result.password}" (${result.password.length} chars): ${result.avgTime}ms (${result.avgNanoTime}ns)`);
  });
  
  // Find timing differences
  const matchResult = results.find(r => r.found);
  const noMatchResults = results.filter(r => !r.found);
  
  if (matchResult && noMatchResults.length > 0) {
    const avgNoMatch = noMatchResults.reduce((sum, r) => sum + parseFloat(r.avgTime), 0) / noMatchResults.length;
    const avgNoMatchNano = noMatchResults.reduce((sum, r) => sum + parseFloat(r.avgNanoTime), 0) / noMatchResults.length;
    const timingRatio = parseFloat(matchResult.avgTime) / avgNoMatch;
    const nanoTimingRatio = parseFloat(matchResult.avgNanoTime) / avgNoMatchNano;
    
    console.log(`\nTIMING ANALYSIS:`);
    console.log(`   Full match (${matchResult.password}): ${matchResult.avgTime}ms (${matchResult.avgNanoTime}ns)`);
    console.log(`   Average no-match: ${avgNoMatch.toFixed(2)}ms (${avgNoMatchNano.toFixed(0)}ns)`);
    console.log(`   Timing ratio: ${timingRatio.toFixed(2)}x`);
    console.log(`   Nano timing ratio: ${nanoTimingRatio.toFixed(2)}x`);
    
    // Check for timing differences in both ms and nanoseconds
    if (timingRatio > 1.2 || nanoTimingRatio > 1.2) {
      console.log(`   VULNERABLE: Clear timing difference detected!`);
      console.log(`   Attackers can use this to guess passwords character by character.`);
    } else if (timingRatio > 1.1 || nanoTimingRatio > 1.1) {
      console.log(`   POTENTIALLY VULNERABLE: Small timing difference detected.`);
      console.log(`   May be exploitable with statistical analysis.`);
    } else {
      console.log(`   SECURE: No significant timing difference`);
    }
  }
  
  // Show progression analysis
  console.log(`\nPROGRESSION ANALYSIS:`);
  const progressiveResults = results.filter(r => r.password.startsWith("take"));
  if (progressiveResults.length > 0) {
    console.log(`   Testing progressive word matching against target:`);
    progressiveResults.forEach(result => {
      const indicator = result.found ? "🎯" : "  ";
      console.log(`   ${indicator} "${result.password}": ${result.avgTime}ms (${result.avgNanoTime}ns)`);
    });
  }
  
  console.log("\nThis demonstrates a basic string timing attack.");
  console.log("   Word-by-word comparison creates timing differences.");
};

// Run the test
testTimingAttack().catch(console.error);

