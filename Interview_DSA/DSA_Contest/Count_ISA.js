function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let ind = 1;
  for (let i = 0; i < test; i++) {
    let [row, col] = input[ind++].trim().split(" ").map(Number);
    let matrix = [];
    for (let k = 0; k < row; k++) {
      matrix.push(input[ind++].trim().split(""));
    }
    // console.log(matrix);
 
  let count=0;
  for (let m=0;m<row;m++){
      for (let n=0;n<col;n++){
          if(n<col-2){
              if(matrix[m][n] + matrix[m][n+1] + matrix[m][n+2] === "isa"){
                  count++
              }
          }
          if(m<row-2){
              if(matrix[m][n] + matrix[m+1][n] + matrix[m+2][n] === "isa"){
                  count++
              }
          }
      }
    }
    console.log(count)
}
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai`);
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
