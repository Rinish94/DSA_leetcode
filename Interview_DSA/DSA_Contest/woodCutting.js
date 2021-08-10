function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  // console.log(n)
  // console.log(arr)
  let res = woodCutting(arr, n);
  console.log(res);
}
function woodCutting(arr, n) {
  let newArr = new Array(n + 1);
  newArr[0] = 0;
  for (let i = 1; i <= n; i++) {
    let maximum = Number.MIN_VALUE;
    for (let j = 0; j < i; j++)
      maximum = Math.max(maximum, arr[j] + newArr[i - j - 1]);
    newArr[i] = maximum;
  }

  return newArr[n];
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
  3 1 5 8   
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
