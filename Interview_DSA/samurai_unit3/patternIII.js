function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  // console.log(n);
  let mat = [];
  for (let i = 0; i < n; i++) {
    mat.push(new Array(n).fill(" "));
  }
  for (let i = 0; i < n; i++) {
    mat[0][i] = "*";
  }
  for (let i = 1; i < n - 1; i++) {
    mat[i][n - 1] = "*";
  }

  for (let i = n - 1; i >= 0; i--) {
    mat[n - 1][i] = "*";
  }
  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(" "));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2`);
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
