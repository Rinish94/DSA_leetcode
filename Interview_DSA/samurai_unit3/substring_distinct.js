function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [num, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim();
  count = 0;
  for (let i = 0; i < num; i++) {
     console.log(arr[i]+" "+arr[i+1])

  }
  //console.log(count);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 2
  abcc`);
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
