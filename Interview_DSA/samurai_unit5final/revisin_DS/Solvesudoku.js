function runProgram(input) {
  input = input.trim().split("\n");
  let board = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      board = input[i].trim().split(" ").map(Number);
    }
    console.log(solve(board));
  }
}

function solve(board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  // there is no more empty spots
  if (row === -1) {
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      solve(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
}
function nextEmptySpot(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
}
function checkRow(board, row, value) {
  for (var i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }

  return true;
}
function checkColumn(board, column, value) {
  for (var i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }

  return true;
}
function checkSquare(board, row, column, value) {
  boxRow = Math.floor(row / 3) * 3;
  boxCol = Math.floor(column / 3) * 3;

  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }

  return true;
}
function checkValue(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }

  return false;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`);
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
