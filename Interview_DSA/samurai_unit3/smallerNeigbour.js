function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  //   console.log(n);
  let arr = input[1].trim().split(" ").map(Number);
  let stack = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0) {
      if (stack[stack.length - 1] >= arr[i]) {
        ///top accessing
        stack.pop();
      } else if (stack[stack.length - 1] < arr[i]) {
        res.push(stack[stack.length - 1]);
        stack.push(arr[i]);
        break;
      }
    }
    if (stack.length === 0) {
      stack.push(arr[i]);
      res.push(-1);
    }
  }
  console.log(res.join(' '));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
