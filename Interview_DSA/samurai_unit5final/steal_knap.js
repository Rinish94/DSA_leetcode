function runProgram(input) {
  input = input.trim().split("\n");
  let w = +input[0].trim();
  let n = +input[1].trim();
  let gemValue = input[2].trim().split(" ").map(Number);
  let gemWeight = input[3].trim().split(" ").map(Number);

  let res = knapSack(w, gemWeight, gemValue, n);
  console.log(res);
}
function max(a, b) {
  return a > b ? a : b;
}

function knapSack(W, wt, val, n) {
  let i, w;
  let K = new Array(n + 1);

  for (i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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
