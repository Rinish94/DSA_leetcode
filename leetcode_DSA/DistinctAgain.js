function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let obj = {};
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[i + 1]) {
      obj[i] = arr[i];
      sum += obj[i]
    }
  }
  console.log(sum)
 
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
  2 2 8 8`);
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
