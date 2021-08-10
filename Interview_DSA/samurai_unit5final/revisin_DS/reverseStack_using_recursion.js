function runProgram(input) {
  //Best example to show recursion using stack//
  input = input.trim().split("\n").map(Number);
  // let arr = [];
  // for (let i = 0; i < input.length; i++) {
  //   arr.push(input[i].map(Number));
  //   // if (input[i] != -1) {
  //   //   arr.push(input[i]);
  //   // } else {
  //   //   break;
  //   // }
  // }
  // console.log(arr)
  reverse(input, 0);
}
function reverse(arr, n) {
  if (arr[n] == -1) {
    return;
  }

  reverse(arr, n + 1);
  console.log(arr[n]);
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    2
    3
    4
    -1`);
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
