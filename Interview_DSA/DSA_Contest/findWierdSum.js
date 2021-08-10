function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 1; i <= test; i++) {
    let n = +input[line++].trim();
    let arr = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
     let output= checkVal(arr,n);
     if(output){
         console.log("Yes")
     }else{
        console.log("No")

     }
  }
}

let out = [];
function subset(arr, res = [], i = -1) {
  if (i === arr.length) {
    return;
  }
  if (res.length !== 0) {
    out.push(res.join(" "));

  }
  for (let j = i + 1; j < arr.length; j++) {
    res.push(arr[j]);
    subset(arr, res, j);
    res.pop();
  }
}

function checkVal(arr,n){
  subset(arr);
  for(let i=0;i<out.length;i++) {
     let nums = out[i].trim().split(' ').map(Number).filter(a=>(arr[n-1]!==a));
     if(nums.length!==0){
         nums = nums.reduce((a,b)=>a+b)
     }
     if(nums===arr[n-1]&&Number(out[i])!==arr[n-1]){
         return true
     }
  }
return false;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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
