function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  for (let i = 0, j = 1; i < test; i++) {
    let dim = +input[j++].trim();
    let arr = input[j++].trim().split(" ").map(Number);
    // console.log(arr)
    let stack = [];
    let res = [];
    let sum = 0;
    for (let i = dim - 1; i >= 0; i--) {
      while (stack.length > 0) {
        if (arr[i] > stack[stack.length - 1]) {
          res.push(stack[stack.length - 1]);
          stack.push(arr[i]);
          break;
        } else if (arr[i] <= stack[stack.length - 1]) {
          stack.pop();
        }
      }
      // console.log(arr[i],i)
      if (stack.length == 0) {
        stack.push(arr[i]);
        res.push(0);
      }
    }
    sum = res.reduce((a, c) => {
      return a + c;
    }, 0);
    console.log(sum);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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
