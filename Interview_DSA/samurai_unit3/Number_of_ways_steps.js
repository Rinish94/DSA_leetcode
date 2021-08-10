function runProgram(input) {
  input = input.trim().split("\n");

  let step = +input[0].trim();
  //   console.log(step) 
  console.log(stepCount(step));
  function stepCount(step) {
    if (step < 0) return 0;
    if (step == 0) return 1;
    return stepCount(step - 1) + stepCount(step - 2) + stepCount(step - 3);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4`);
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
