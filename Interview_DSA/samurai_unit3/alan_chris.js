function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let arr = [];
  for (let i = 0; i < test; i++) {
    arr = input[i + 1].trim().split("");
    let stack = [];
    // console.log(arr);
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[j]);
      if (arr[j] === "#") {
        stack.pop();
      } else {
        stack.push(arr[j]);
      }
    }
    console.log(stack.join(""));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    ab#d
    a#bc`);
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
