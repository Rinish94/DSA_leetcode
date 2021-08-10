function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  // console.log(n);
  let mat = "";
  for (let i = 0; i < n; i++) {
    mat += "*";

    console.log(mat);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2`);
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
