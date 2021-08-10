function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let mat = [];
    let [r, c] = input[line++].trim().split(" ").map(Number);
    //    console.log(r,c)
    for (let j = 0; j < r; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    let result = spiralMat(mat, 0, c - 1, 0, r - 1);
    console.log(result.join(" "));
  }
}

function spiralMat(mat, left, right, up, down) {
  let res = [];

  while (left <= right&&up<= down) {
    for (let i = down; i >= up; i--) {
      res.push(mat[i][left]);
    }
    left++;
    for (let i = left; i <= right; i++) {
      res.push(mat[up][i]);
    }
    up++;

    for (let i = up; i <= down; i++) {
      if (left <= right) {
        res.push(mat[i][right]);
      }
    }
    right--;

    for (let i = right; i >= left; i--) {
      if (up <= down) {
        res.push(mat[down][i]);
      }
    }
    down--;
  }
  return res;
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
  4 3
  4 5 6
  3 12 7
  2 11 8
  1 10 9`);
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
