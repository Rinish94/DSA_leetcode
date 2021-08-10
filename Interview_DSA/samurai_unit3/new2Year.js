function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  //   console.log(n)
  input.shift();
  let stack = [];
  let queue = [];
  for (let i = 0; i < n; i++) {
    cases = input[i].trim().split(" ").map(Number);

    switch (cases[0]) {
      case 1: {
        queue.push(cases[1]);
        break;
      }
      case 2: {
        stack.push(cases[1]);
        break;
      }
      case 3: {
        if (queue[0] === undefined) {
          console.log(-1);
        } else {
          console.log(queue[0]);
        }
        break;
      }
      case 4: {
        if (stack[stack.length - 1] === undefined) {
          console.log(-1);
        } else {
          console.log(stack[stack.length - 1]);
        }
        break;
      }
      case 5: {
        if (queue.length === 0) {
          stack.push(-1);
        } else {
          let first = queue.shift();
          stack.push(first);
        }
        break;
      }
      default: {
        break;
      }
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
