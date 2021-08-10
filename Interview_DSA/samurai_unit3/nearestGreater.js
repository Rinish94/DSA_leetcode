function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
//   let line = 1;

  for (let i = 0, j = 1; i < test; i++) {
    let n = +input[j++].trim();
    let arr = input[j++].trim().split(" ").map(Number);
    let stack = [];
    let res = [];
    for (let j = 0; j < n; j++) {
      while (stack.length > 0) {
        if (arr[j] >= stack[stack.length - 1]) {
          stack.pop();
        } else if (arr[j] < stack[stack.length - 1]) {
          res.push(stack[stack.length - 1]);
          stack.push(arr[j]);
          break;
        }
      }
      if (stack.length == 0) {
        res.push(-1);
        stack.push(arr[i]);
      }
    }
    console.log(res.join(" "));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    5
    5 4 1 3 2
   `);
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
