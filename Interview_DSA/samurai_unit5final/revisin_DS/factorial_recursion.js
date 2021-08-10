function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();

  let res = factorial(n);
  console.log(res);
}
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    // console.log(n * factorial(n - 1));
    return n * factorial(n - 1);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5`);
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
