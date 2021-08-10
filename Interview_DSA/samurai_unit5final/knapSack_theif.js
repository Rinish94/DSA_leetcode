function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let line = 1;
  for (let i = 0; i < n; i++) {
    let [s, n] = input[line++].trim().split(" ").map(Number);
    let val = [];
    let weight = [];
    for (let j = 0; j < n; j++) {
      let [w, v] = input[line++].trim().split(" ").map(Number);
      val.push(v);
      weight.push(w);
    }
    let result = knapSackTheif(s, weight, val, n);
    console.log(result);
  }
}
function max(a, b) {
  if (a < b) {
    return b;
  }
  return a;
}
let Dp = [];
function knapSackTheif(s, weight, val, n) {
  if (n == 0 || s === 0) {
    return 0;
  }
  if (Dp[n] !== -1) {
    return Dp[n];
  }
  if (weight[n - 1] > s) {
    return (Dp[n] = knapSackTheif(s, weight, val, n - 1));
  } else {
    return (Dp[n] = max(
      val[n - 1] + knapSackTheif(s - weight[n - 1], weight, val, n - 1),
      knapSackTheif(s, weight, val, n - 1)
    ));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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
