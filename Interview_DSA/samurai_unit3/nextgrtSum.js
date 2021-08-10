function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  for (let i = 0, j = 1; i < test; i++) {
    let dim = +input[j++].trim();
    // console.log(dim)
    let arr = input[j++].trim().split(" ").map(Number);
    // console.log(arr)
    let stack = [];
    let res = [];
    let sum = 0;
    for (let i = dim - 1; i >= 0; i--) {
      while (stack.length > 0) {
        if (arr[i] < stack[stack.length - 1]) {
          res.push(stack[stack.length - 1]);
          sum += arr[i];
          stack.push(arr[i]);
          break;
        } else if (arr[i] >= stack[stack.length - 1]) {
          stack.pop();
        }
      }
      if (stack.length == 0) {
        stack.push(arr[i]);
        res.push(-1);
      }
    }
    console.log(su);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
5
2 3 5 8 3`);
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
