function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    for (let l = 0; l < n; l++) {
      let val = 0;
      let bool = false;
      for (let m = l; m < n; m++) {
        val += arr[m];
        if (val % 2 == 0) {
          bool = true;
          break;
        }
      }
      if (bool === true) {
        console.log("Yes");
        break;
      } else {
        console.log("No");
        break;
      }
    }
    // let ans = subset(arr);
    // console.log(ans);
    // subset(arr)
    // let ans = out.trim().split(" ").map(Number)
  }
}
// let out = [];
// function subset(arr, res = [], i = -1) {
//   if (i === arr.length) {
//     return;
//   }
//   if (res.length !== 0) {
//     out.push(res.join(" "));

//   }
//   for (let j = i + 1; j < arr.length; j++) {
//     res.push(arr[j]);
//     subset(arr, res, j);
//     res.pop();
//   }
// }

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    1
    5
    4
    1 2 3 4`);
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
