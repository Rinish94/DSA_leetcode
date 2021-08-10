function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim().split(" ");
  // console.log(test);
  input.shift();
  // console.log(input)
  let open = {
    '{': '}',
    '[': ']',
    '(': ')'
};

let closed = {
    '}': true,
    ']': true,
    ')': true
}
  let line = 0;
  let str = "";
  let stack = [];
  for (let i = 0; i < test; i++) {
    str = input[line++].trim().split(" ");
    for (let j = 0; j < str.length; j++) {
      //   console.log(str[j]);
      let char = str[j];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
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
