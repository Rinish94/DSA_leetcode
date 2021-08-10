function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let len = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[len++].trim();
    let arr = input[len++].trim().split(" ").map(Number);
    // console.log(n);
    // console.log(arr);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    5
    12  5  2  45  1
    2
    2 3
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
