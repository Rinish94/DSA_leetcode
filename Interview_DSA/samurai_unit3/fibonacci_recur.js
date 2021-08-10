function runProgram(input) {
  input = input.trim();
  let num = +input;
  //   console.log(num)
  function factorial(num) {
    if (num <= 1) return num;

    return factorial(num - 1) + factorial(num - 2);
  }
  console.log(factorial(num));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`15`);
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
