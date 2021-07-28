function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let len = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[len++];
    let str = input[len++].trim().split("").sort().join(" ");
    let str2 = input[len++].trim().split("").sort().join(" ");
   console.log(str===str2?"Yes":"No")
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`);
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
