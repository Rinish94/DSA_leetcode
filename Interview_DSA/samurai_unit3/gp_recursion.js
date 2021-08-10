function runProgram(input) {
  input = input.trim().split(" ");
  let n = +input[0].trim();
  let r = +input[1].trim();
  //    console.log(n,r)

  function GP(n) {
    // console.log(n);
    if (n == 0) return 1;

    let value = 1 / Math.pow(r, n) + GP(n - 1);
    return value;
  }
  console.log(GP(n).toFixed(4));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1 1`);
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
