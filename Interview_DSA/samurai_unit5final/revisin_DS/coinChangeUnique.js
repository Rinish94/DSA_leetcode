function runProgram(input) {
  input = input.trim().split("\n");
  let [m, n] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let res = coinChange(arr, n, m);
  console.log(res);
}

function coinChange(arr, n, m) {
  if (m == 0) {
    return 1;
  }
  if (m < 0) {
    return 0;
  }

  if (n <= 0 && m >= 1) {
    return 0;
  }

  return coinChange(arr, n - 1, m) + coinChange(arr, n, m - arr[n - 1]);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`219 24
  36 10 42 7 50 1 49 24 37 12 34 13 39 18 8 29 19 43 5 44 28 23 35 26`);
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
