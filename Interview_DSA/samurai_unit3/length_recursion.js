function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim().split("");
  // console.log(str)
  let sum = 0;
  function len(sum) {
    if (str[sum] === undefined) {
      return sum;
    }
    return len(sum + 1);
  }
  console.log(len(sum));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`masaischool`);
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
