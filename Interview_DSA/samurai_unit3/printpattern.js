function runProgram(input) {
  input = input.trim().split("\n");
  var row = input[0].trim().split(" ").map(Number);
  let output = "";
  for (let i = 1; i <= row; i++) {
    // var row = input[i].trim()
    {
      for (let j = 1; j <= row; j++) {
        if (i == 0 || i == row || j == 1 || j == row) {
          console.log("*");
        } else {
          console.log(" ");
        }
      }
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2`);
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
