function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();

  for (let i = 0, j = 1; i < test; i++) {
    let dim = +input[j++].trim();

    let mat = [];
    for (let k = 0; k < dim; k++) {
      mat[k] = input[j++].trim().split(" ").map(Number);
    }
    // console.log(mat)

    let top = 0;
    let btm = 0;
    let m = dim;
    let n = dim;
    let prev, curr;
    while (top < m - 1 && btm < n - 1) {
      prev = mat[top + 1][btm];
      for (let i = btm; i < n; i++) {
        curr = mat[top][i];
        mat[top][i] = prev;
        prev = curr;
      }
      top++;

      for (let i = top; i < m; i++) {
        curr = mat[i][n - 1];
        mat[i][n - 1] = prev;
        prev = curr;
      }
      n--;
      for (let i = n - 1; i >= btm; i--) {
        curr = mat[m - 1][i];
        mat[m - 1][i] = prev;
        prev = curr;
      }
      m--;

      for (let i = m - 1; i >= top; i--) {
        curr = mat[i][btm];
        mat[i][btm] = prev;
        prev = curr;
      }
      btm++;
    }
     mat.forEach((el) => console.log(el.join(" ")));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6`);
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
