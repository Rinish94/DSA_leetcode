function runProgram(input) {
  input = input.trim().split(" ");
  let n = +input[0].trim();

  // console.log(n)
  //   console.log(val);
  function Beyond(n) {
    let val = Math.log(n);
    // console.log(n);
    if (n == 1) return 0;

    return Beyond(n - 1) + val;
  }
  console.log(Beyond(n).toFixed(4));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3`);
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
