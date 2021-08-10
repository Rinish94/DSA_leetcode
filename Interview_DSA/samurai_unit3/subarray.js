function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input)
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  for (let i = 0; i < test; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    arr = input[line++].trim().split(" ").map(Number);
    //console.log(arr)
    let count = 0;
    
    for (let l = 0; l < n; l++) {
      let sum = 0;
      for (let m = l; m < n; m++) {
        sum += arr[m];
        // console.log(sum)
        if (sum === k) {
          count++;
          break
        }
      }
    }
    if (count > 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  5 3
  1 2 1 3 4
  4 5
  1 2 1 3
  3 2
  1 2 1
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
