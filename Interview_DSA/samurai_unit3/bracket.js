function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input.shift();
  // console.log(test);

  // console.log(input)

  for (let i = 0; i < test; i++) {
    let str = input[i].trim().split("");
    // console.log(str)
    if (str.length % 2 !== 0) {
      console.log("not balanced");
    } else {
      let stack = [];
      for (let j = 0; j < str.length; j++) {
        if (str[j] === "{" || str[j] === "[" || str[j] === "(") {
          stack.push(str[j]);
          // console.log(stack);
        } else if (stack.length !== 0) {
          if (
            (str[j] == "}" && stack[stack.length - 1] == "{") ||
            (str[j] == "]" && stack[stack.length - 1] == "[") ||
            (str[j] == ")" && stack[stack.length - 1] == "(")
          ) {
            stack.pop();
            // console.log("Balanced");
          }
        } else {
          stack.push(str[j]);
        }
      }
      // console.log(stack);
      if (stack.length == 0) {
        console.log("balanced");
      } else {
        console.log("not balanced");
      }
    }
  }
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  {([])}
  ()
  ([]
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
