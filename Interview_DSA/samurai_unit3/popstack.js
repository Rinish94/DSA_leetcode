function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  input.shift();
  let stack = [];
  let res = [];
  let val = [];
  for (let i = 0; i < test; i++) {
    val = input[i].trim().split(" ").map(Number);
    // console.log(val);
    if (val[0] == 1) {
      stack.push(val[1]);
    } else if (val[0] == 2) {
      stack.pop();
    } else if (val[0] == 3) {
      if (stack.length > 0) {
        console.log(stack[stack.length - 1]);
      } else {
        console.log("Empty!");
      }
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
