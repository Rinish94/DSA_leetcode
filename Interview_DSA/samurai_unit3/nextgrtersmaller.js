function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input)
  let test = +input[0];

  for (let i = 0, j = 1; i < test; i++) {
    let dim = +input[j++].trim();
    let arr = input[j++].trim().split(" ").map(Number);
    // console.log(arr.reverse())
    let revArr = arr.reverse();
    // console.log(revArr)
    let stack = [];
    let res = [];
    let sum = 0;
    for (let i = 0; i < dim; i++) {
      //  4 2 3 1
      while (stack.length > 0) {
        if (revArr[i] >= stack[stack.length - 1]) {
          stack.pop();
        } else if (revArr[i] < stack[stack.length - 1]) {
          res.push(stack[stack.length - 1]);
          stack.push(revArr[i]);
          break;
        }
      }
      if (stack.length === 0) {
        stack.push(revArr[i]);
        res.push(-1);
      }
    }
    // console.log(stack)
    sum += res;
    console.log(sum);
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
