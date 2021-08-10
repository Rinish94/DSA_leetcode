function runProgram(input) {
    input=input.trim().split('\n')

    for (let i=0;i<input.length;i++){
        input[i]=input[i].trim().split(' ').map(Number)
    }
    input.shift();
    // console.log(input)
    let stack =[]
    for (let i=0; i<input.length;i++) {
        if(input[i][0] === 1){
            if(stack.length === 0){
                console.log("No Food")
            }
            else{
              console.log(stack[stack.length-1]);
              stack.pop();
            }
        }
        else if(input[i][0] === 2){
            stack.push(input[i][1]);
        }
    }
  }
  if (process.env.USERNAME === "Ashutosh Pandey") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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
  