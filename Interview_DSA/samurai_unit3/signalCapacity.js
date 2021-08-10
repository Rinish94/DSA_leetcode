function runProgram(input) {
  input = input.trim().split("\n");
  let number_of_input = Number(input[0]);
  // console.log(number_of_input)

  let j = 1;

  for (let i = 0; i < number_of_input; i++) {
    let num = Number(input[j++]);
    // console.log(num)
    let arr = input[j++].trim().split(" ").map(Number);
    // console.log(arr)
    let resultArr = new Array(num).fill(1);
 
   let stack = [];

    stack[0] = 0;
    // console.log(stack)
    for (let j = 0; j < num; j++) {
      while (stack.length && arr[j] >= arr[stack[stack.length - 1]]) {
        stack.pop();
        // console.log(stack)
      }
      if (stack.length === 0) {
        resultArr[j] = j + 1;
        //   console.log(resultArr[j] )
      } else {
        resultArr[j] = j - stack[stack.length - 1];
        //   console.log(resultArr[j] = j - stack[stack.length - 1])
        //   console.log(resultArr[j])
      }
      stack.push(j);
    }
    console.log(resultArr.join(" "));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
      7
      100 80 60 70 60 75 85
     `);
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
