function runProgram(input) {
    input = input.trim().split('\n');
    let tests = +input[0].trim();
    let line = 1;
    for(let i=0;i<tests;i++){
        let n = +input[line++].trim();
        checkQueue(input[line++].trim().split(' ').map(Number),n);
    }
}

function checkQueue(arr,n){
    let count=1;
    for(let i=0;i<n-1;i++){
        if(arr[i]>=arr[i+1]){
            count++
        }
    }
    console.log(count)
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    8
    1 3 2 4 4 5 3 6`);
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
