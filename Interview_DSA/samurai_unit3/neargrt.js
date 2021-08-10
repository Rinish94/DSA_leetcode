function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  let n = 0;

  for (let i = 0; i < test; i++) {
    n = input[line++].trim().split(" ").map(Number);
    arr = input[line++].trim().split(" ").map(Number);
    // console.log(arr, n);
    let stack = [];
    let res = [];

    for (let j = 0; j < n; j++) {
      //   console.log(arr[j]);
      while (stack.length > 0) {
        if (stack[stack.length - 1] <= arr[j]) {
          stack.pop();
        } else if (arr[j] < stack[stack.length - 1]) {
          res.push(stack[stack.length - 1]);
          stack.push(arr[j]);
          break
        }
      }

      if (stack.length === 0) {
        res.push(-1);
        stack.push(arr[j]);
      }
    }
    console.log(res.join(' '))
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    5
    5 4 1 3 2`);
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
