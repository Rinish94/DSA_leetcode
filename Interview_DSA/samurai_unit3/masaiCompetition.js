function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim().split(" ");
  let line = 1;

  for (let i = 0; i < test; i++) {
    let [row, col] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    let str = "";
    for (let j = 0; j < row; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    for (let j = 0; j < mat.length; j++) {
      //   console.log(mat);
      str += Math.max(...mat[j]) + " ";
    }
    console.log(str.trim());
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    3 3
    7 7 1
    4 3 10
    1 2 3`);
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
