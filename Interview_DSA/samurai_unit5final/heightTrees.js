//You are given n trees and their heights. 
//Your task is to write a program that calculates the maximum number of trees whose height is in 
//increasing order. They need not be in continuous manner.



function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let max = 0;
  let count = 0;
  let lenM=0
  for (let i = 0; i < n; i++) {
    if (arr[0] > arr[1]) {
      max = arr[1];
    } else {
      if (arr[i] > max) {
        max = arr[i];
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
  1 4 3 7 6 10`);
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
