function runProgram(input) {
  input = input.trim().split(" ");
  let k = +input[1];
  let value = input[0].split("").map(Number);
  let sum = value.reduce((a, b) => a + b);
  let output = Supersum((sum * k).toString());
  console.log(output);
}

function Supersum(num) {
    // console.log(num)
  if (num.length <= 1) {
    return num;
  }
//   console.log(num)
  num = num.split("").map(Number);
//   console.log(num)
  let sum = num.reduce((a, b) => a + b);

  return Supersum(sum.toString());
}
if (process.env.USERNAME === "Ashutosh Pandey" || process.env.USER === "root") {
  runProgram(`123 3`);
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
