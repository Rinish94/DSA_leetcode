function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  input.shift();
//   console.log(input);
  

}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
abcd`);
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
