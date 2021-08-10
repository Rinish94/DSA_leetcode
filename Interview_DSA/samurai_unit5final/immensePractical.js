function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let count = 0;
  for (let i = 0; i < test; i++) {
    let m = 0;
    let n = 0;
    let strA = input[line++].trim();
    let strB = input[line++].trim();
    while (m < strA.length && n < strB.length) {
      if (strA[m] !== strB[n] && strA.length === strB.length) {
        count++;
        m++;
        n++;
      } else if (strA[m] !== strB[n] && strA.length < strB.length) {
        count++;
        n++;
        m++;
      } else if (strA[m] !== strB[n] && strA.length) {
        count++;
        m++;
        n++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde
    `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
