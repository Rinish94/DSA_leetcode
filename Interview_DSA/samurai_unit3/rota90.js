function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0].trim();
    let line = 1;
    let arr = [];
  
    for (let i = 0; i < test; i++) {
      let sum = 0;
      let num = input[line++].trim().split(" ").map(Number); //1=>2
      arr = input[line++].trim().split(" ").map(Number); //2=>3
       console.log(arr);
    }
    // for (let j=row-1; j>=0;j--){
    //     let matrix2 = []
    //     for (let i=0; i<row;i++){
    //         matrix2.push(matrix[i][j])
    //     }
    //     console.log(matrix2.join(' '))
    // }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
runProgram(`2
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
3
1 2 3
4 5 6
7 8 9`);
}
else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/, "")
   runProgram(read);
});
process.on("SIGINT", function () {
   read = read.replace(/\n$/, "")
   runProgram(read);
   process.exit(0);
});
}   