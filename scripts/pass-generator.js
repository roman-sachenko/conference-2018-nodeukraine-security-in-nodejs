const fs = require('fs');

const writeStream = fs.createWriteStream('./pass_test.txt');

let string = '';
let count = 0;
for (let index = 0; index < 300; index++) {

  if (count <= 10) {
    string = `${string}${index}\r\n`;
    count++;
  } else {
    writeStream.write(string);
    string = '';
    count = 0;
  }


}

writeStream.end();
