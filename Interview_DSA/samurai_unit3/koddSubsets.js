function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim()
//   console.log(test);

}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
