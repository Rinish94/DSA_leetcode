function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let ans = [];
  for (let i = 1; i <= 9; i++) {
    let val = "";
    for (let j = 0; j < n; j++) {
      val += i;
    }
    ans.push(val);
  }
  console.log(ans.join(" "));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3`);
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
