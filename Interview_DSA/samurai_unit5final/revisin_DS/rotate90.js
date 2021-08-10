function runProgram(input){
   input = input.trim().split('\n')
   let n = +input[0].trim()
   let mat =[]
   for (let i =0;i<n;i++){
       mat[i] = input[i+1].trim().split(' ') 
   }
//    console.log(mat)
  for (let j=n-1;j>=0;j--){
    let mat2=[]
    for(let i=0;i<n;i++){
  mat2.push(mat[i][j])
    }
    console.log(mat2.join(' '))
  }
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`)
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
}

