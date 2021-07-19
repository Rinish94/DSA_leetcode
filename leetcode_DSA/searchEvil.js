function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let len = 1;
  for (let i = 0; i < test; i++) {
    let mat = [];
    let [r, c] = input[len++].trim().split(" ").map(Number);

    for (let j = 0; j < r; j++) {
      mat.push(input[len++].trim().split(" ").map(Number));
    }
    var k = +input[len++].trim();
    // console.log(k);

    let result = matrix(mat, r, c, k);
    if (result) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

function matrix(mat, r, c, k) {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (mat[i][j] === k) {
        return true;
      }
    }
  }
  return false;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    13
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    17`);
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
