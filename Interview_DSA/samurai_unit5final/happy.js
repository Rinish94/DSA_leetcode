function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0].trim();
  for (let i = 1; i <= tests; i++) {
    let out = happy(input[i].trim());
    if (out) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
function happy(n) {
  // console.log(n)
  if (n == 1) {
    return true;
  }
  if (n !== 1 && n < 10) {
    return false;
  }
  sum = n
    .split("")
    .map(Number)
    .map((a) => a * a)
    .reduce((a, b) => a + b);
  return happy(sum.toString());
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  19
  2
  312082396
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
