function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  //   let arr = [];
  //   let num = 0;
  for (let i = 0; i < test; i++) {
    let num = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //    console.log(num,arr)
    console.log(recur(num, arr));
  }
  function recur(num, arr) {
    if (num <= 0) {
      return 0;
    } else {
      return arr[num - 1] + recur(num - 1, arr);
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
