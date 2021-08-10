function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(" ").map(Number);
  let matrix = [];
  let len = 1;
  for (let i = 0; i < row; i++) {
    matrix.push(input[len++].trim().split(" ").map(Number));
  }
  travevers(matrix, row, col);
}
function travevers(matrix, row, col) {
  let res = "";
  for (let i = col - 1; i >= 0; i--) {
    for (let j = 0; j < row; j++) {
      res += matrix[j][i] + " ";
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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
