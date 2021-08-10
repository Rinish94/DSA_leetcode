function runProgram(input){
    input = input.trim().split('\n');
    let tests = Number(input[0].trim());
    let line = 1;
    for(let i=0;i<tests;i++){
        let mat = []
         let [r,c] = input[line].trim().split(' ').map(Number);
         for(let j=line+1;j<r+line+1;j++){
             mat.push(input[j].trim().split(' ').map(Number));
         }
         getSpiral(mat,r-1,0,c-1,0,r,c);
         line += r+1;
    }
 }
 function getSpiral(mat,down,up,right,left,r,c){
     let out = []
     while(up<=down&&left<=right&&out.length<r*c-1){
         for(let i=down;i>=up;i--){
             out.push(mat[i][left]);
         }
         left++;
         for(let i=left;i<=right;i++){
             out.push(mat[up][i]);
         }
         up++;
         for(let i=up;i<=down;i++){
             out.push(mat[i][right])
         }
         right--;
         for(let i=right;i>=left;i--){
             out.push(mat[down][i])
             console.log(mat[down][i])
         }
         down--;
       
 ​
     }
     console.log(out.join(' '),out.length,r*c)
 }
 if(process.env.USER==='Ashutosh Pandey'){
     runProgram(`1
 3 6
 7 3 9 3 5 8
 3 9 3 3 9 5
 2 6 3 9 1 8`);
 }
 else{
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