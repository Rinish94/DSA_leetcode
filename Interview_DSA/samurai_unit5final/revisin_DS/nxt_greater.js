function runProgram(input) {
    input = input.trim().split("\n")
    let test= +input[0]

    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(" ").map(Number)
        // console.log(arr.reverse())
        let revArr = arr.reverse()
        let stack = []
        let res = []
        for(let i=0; i<dim; i++){  
          while(stack.length > 0){
            if(revArr[i] >= stack[stack.length-1]){
                stack.pop()
            } else if (revArr[i] < stack[stack.length-1]){
                res.push(stack[stack.length-1])
                stack.push(revArr[i])
                break
            }
          }
          if(stack.length === 0){
              stack.push(revArr[i])
              res.push(-1)
          }
        }
        console.log(res.reverse().join(' '))
    }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
  4
  1 3 2 4`);
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
