function runProgram(input) {
    input = input.trim().split("\n");
    let matrix = [];
    let transpose = [];
    for (let i = 0; i < input.length; i++) {
      matrix[i] = input[i].trim().split(" ");
    } 
    // console.log(matrix)
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (transpose[j] === undefined) transpose[j] = [];
        transpose[j][i] = matrix[i][j];
      }
    }
    // console.log(transpose)
    let d1 = matrix[0][0];
    let d2 = matrix[2][0];
    let d1Flag = true,
      d2Flag = true;
    for (let i = 0; i < matrix.length; i++) {
      //takes care of row
      if (
        matrix[i].every(function (e) {
          return e === matrix[i][0];
        })
      ) {
        console.log(matrix[i][0]);
        return;
      } //takes care of coloumn
      if (
        transpose[i].every(function (e) {
          return e === transpose[i][0];
        })
      ) {
        console.log(transpose[i][0]);
        return;
      } //diagonals
      if (matrix[i][i] !== d1) {
        d1Flag = false;
      }
      if (matrix[2 - i][2 - (matrix.length - 1 - i)] !== d2) {
        d2Flag = false;
      }
      
    }
    console.log(d1Flag ? d1 : d2Flag ? d2 : "Tie");
  }
  if (process.env.USERNAME === "Ashutosh Pandey") {
    runProgram(`x o x
  o x x
  o o o`);
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
  