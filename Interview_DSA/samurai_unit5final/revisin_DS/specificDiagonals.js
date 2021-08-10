function runProgram(input) {
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(" ").map(Number);
  let matrix = [];
  let len = 1;
  for (let i = 0; i < row; i++) {
    matrix.push(input[len++].trim().split(" ").map(Number));
  }
  let k = +input[len].trim();
  specificDiag(matrix, row, col, k);
}

function specificDiag(matrix, row, col, k) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == k) {
        a = j - i;
        b = i + j;
        break;
      }
    }
  }
  // console.log(a,b)
  let result = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j - i == a) {
        result.push(matrix[i][j]);
      }
    }
  }
  console.log(result.join(" "));
  let result2 = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i + j == b) {
        result2.push(matrix[i][j]);
      }
    }
  }
  console.log(result2.join(" "));
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
