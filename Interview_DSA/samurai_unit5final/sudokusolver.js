var arr = [];
for(let i=0;i<9;i++){
  arr.push(new Array(9).fill(0))
}


function runProgram(input){
    input = input.trim().split('\n');
    for(let i=0;i<9;i++){
        input[i]=input[i].trim().split(' ').map(Number)
        for(let j=0;j<9;j++){
            arr[i][j]=input[i][j]
        }
    }
    if(Soduko_solver()){
        for(let i=0;i<9;i++){
            console.log(arr[i].join(' '))
        }
    }else{
        console.log(-1)
    }
}

function Soduko_solver(){
    let [flag,row,col] = search_blank()
    if(!flag){
        return true
    }
   for(let i=1;i<=9;i++){
       if(check(row,col,i)){
           arr[row][col]=i;
           if(Soduko_solver()){
               return true;
           }
           arr[row][col]=0
       }
    }
    return false;
}

function check(row,col,i){
    let flag1=true;
    for(let j=0;j<9;j++){
        if(arr[j][col]===i){
            flag1=false;
        }
    }
    let flag2=true;
    for(let j=0;j<9;j++){
        if(arr[row][j]===i){
            flag2=false;
        }
    }
    let flag3 = true;
    let rval = (row-(row%3));
    let cval = (col-(col%3))
    for(let j=0;j<3;j++){
        for(let k=0;k<3;k++){
            if(arr[j+rval][k+cval]===i){
                return false
            }
        }
    }

    if(flag1&&flag2&&flag3){
        return true
    }else{
        return false
    }
}

function search_blank(row,col) {
    let flag = false
  for(row=0;row<9;row++){
      for(col=0;col<9;col++){
         if(arr[row][col]===0){
             flag=true
             return [flag,row,col]
         }
        }
    }
    flag=false
    return [flag=false,row,col]
}


if(process.env.USERNAME==='Ashutosh Pandey'){
    runProgram(`0 4 0 0 0 0 1 7 9 
0 0 2 0 0 8 0 5 4 
0 0 6 0 0 5 0 0 8 
0 8 0 0 7 0 9 1 0 
0 5 0 0 9 0 0 3 0 
0 1 9 0 6 0 0 4 0 
3 0 0 4 0 0 7 0 0 
5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`);
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