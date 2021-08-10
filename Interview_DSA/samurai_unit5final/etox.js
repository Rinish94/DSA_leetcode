function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [x, n] = input[0].trim().split(" ").map(Number);
  let res = etox(x, n);
  console.log(res.toFixed(4));
}
let p = 1;
let f = 1;
function etox(x, n) {
  let r;
  if (n == 0) {
    return 1;
  }

  r = etox(x, n - 1);
  p = p * x;
  f = f * n;

  return r + p / f;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 2`);
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
