function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(" ").map(Number);
  //console.log(row,col)
  let mat = [];
  let num = +input[row + 1];
  console.log(num);
  for (let i = 0; i < row; i++) {
    mat[i] = input[i + 1].trim().split(" ").map(Number);
  }
  console.log(mat);
  
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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
