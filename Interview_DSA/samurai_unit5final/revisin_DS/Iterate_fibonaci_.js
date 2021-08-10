function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let res = fibonaci(n);
  console.log(res);
}
function fibonaci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`11`);
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
