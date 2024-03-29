function runProgram(input) {
    input = input.trim().split("\n");
    let board = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        board = input[i].trim().split(" ").map(Number);
        console.log(board[i][j]);
      }
    };
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
  