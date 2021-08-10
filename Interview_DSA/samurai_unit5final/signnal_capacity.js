function runProgram(input) {
  input = input.trim().split("\n");
  let numInputs = +input[0].trim();
  let j = 1;
  for (let i = 0; i < numInputs; i++) {
    let num = Number(input[j++]);
    let arr = input[j++].trim().split(" ").map(Number);
    //    console.log(arr)
    let resultArray = new Array(num).fill(1);

    let stack = [];
    stack[0] = 0;
    // console.log(stack)
    for (let j = 0; j < num; j++) {
      while (stack.length && arr[j] >= arr[stack[stack.length - 1]]) {
        stack.pop();
      }

      if (stack.length === 0) {
        resultArray[j] = j + 1;
        //   console.log(resultArray[j] )
      } else {
        resultArray[j] = j - stack[stack.length - 1];
        //   console.log(resultArray[j] = j - stack[stack.length - 1])
        //   console.log(resultArray[j])
      }
      stack.push(j);
    }
    console.log(resultArray.join(" "));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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
