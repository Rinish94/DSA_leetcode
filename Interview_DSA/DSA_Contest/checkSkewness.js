function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  for (let i = 0, j = 1; i < test; i++) {
    let n = +input[j++].trim();
    // console.log(n)
    let even = 0;
    let odd = 0;
    for (let k = 1; k <= n; k++) {
      // console.log(n[k])
      if (n % k == 0) {
        if (i % 2 == 0) {
          even++;
        } else {
          odd++;
        }
      }
    }
    if (even > odd) {
      console.log("Even Skewed");
    } else if (even < odd) {
      console.log("Odd Skewed");
    } else {
      console.log("Not Skewed");
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  4
  6
  11
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
