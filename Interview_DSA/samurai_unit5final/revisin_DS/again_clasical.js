function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();

  for (let i = 1; i <= n; i++) {
    let str = input[i].trim().split("");
    let res =balance(str);
    if (res === true){
        console.log("balanced")
    }
    else {
        console.log("not balanced")
    }
  }
}

function balance(str) {
  let stack = [];
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      stack.push(str[i]);
    } else {
      if (
        (stack[stack.length - 1] == "(" && str[i] == ")") ||
        (stack[stack.length - 1] == "[" && str[i] == "]") ||
        (stack[stack.length - 1] == "{" && str[i] == "}")
      ) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
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
