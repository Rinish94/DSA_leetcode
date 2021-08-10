function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(n)
    // console.log(arr)
    let res = pairs(arr, n);
    console.log(res);
  }
}

function pairs(arr, n) {
  let val = 0;
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (arr[j] != arr[k]) {
        if (arr[k] == 2 * arr[j]) {
          val++;
        }
      }
    }
  }
  return val;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 `);
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
