function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  let val = 0;
  for (let i = 0; i < n; i++) {
    val += arr[i] * i;
  }
  console.log(val);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
    2 5 1 6`);
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
