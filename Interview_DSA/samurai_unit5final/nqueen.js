function runProgram(input) {
  input = input.trim().split("\n");

  let n = +input[0].trim();
  const board = Array(n)
    .fill(0)
    .map((_) => Array(n).fill("."));

  const colUsed = Array(n).fill(false);
  const diag135Used = Array(n * 2 - 1).fill(false);
  const diag145Used = Array(n * 2 - 1).fill(false);

  //put one queen to the coloumn
  let result = [];
  let count = 0;
  const put = (i, j) => {
    const indexofDiag135 = i + n - j - 1;
    const indexofDiag145 = i + j;
    //if not available
    if (
      colUsed[j] ||
      diag135Used[indexofDiag135] ||
      diag145Used[indexofDiag145]
    ) {
      return;
    }
    //if possible ,put queen in
    board[i][j] = "Q";
    colUsed[j] = true;
    diag135Used[indexofDiag135] = true;
    diag145Used[indexofDiag145] = true;

    //last queen is put
    if (i === n - 1) {
      result.push(board.map((row) => row.join("")));
      count++;
    } else {
      for (let k = 0; k < n; k++) {
        put(i + 1, k);
      }
    }
    board[i][j] = ".";
    colUsed[j] = false;
    diag135Used[indexofDiag135] = false;
    diag145Used[indexofDiag145] = false;
  };
  for (let k = 0; k < n; k++) {
    put(0, k);
  }
  console.log(count);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4`);
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
