function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0].trim();
  for (let i = 0, line = 1; i < tests; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    let output = checkVal(arr, n, k);
    if (output) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

function checkVal(arr, n, k) {
  let i = 0;
  let j = 1;
  while (i < j && i < n && j < n) {
    let val = arr[i] - arr[j];
    if (Math.abs(val) === k) {
      return true;
      
    }
    if (Math.abs(val) > k) {
      i++;
    } else {
      j++;
    }
  }
  return false;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
