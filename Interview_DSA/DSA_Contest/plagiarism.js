function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let [L, R] = input[1].trim().split(" ").map(Number);
  let arr = "";
  for (let i = 1; i <= n; i++) {
    arr += i;
  }
  let res = "";
  let count = 0;

  checkPermutations(arr, res, L, R);
  console.log(count);

  function checkPermutations(arr, res, L, R) {
    if (arr.length === 0) {
      let sum = 0;

      for (let j = L; j <= R; j++) {
        sum += Number(res[j]);
      }
      if (sum % 2 !== 0) {
        count++;
      }
      // console.log(count)
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let fixed = arr.charAt(i);
      let left = arr.substring(0, i);
      let right = arr.substring(i + 1);
      let balance = left + right;
      checkPermutations(balance, res + fixed, L, R);
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
    0 1`);
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
