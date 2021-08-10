function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();

  for (let i = 1; i <= test; i++) {
    let val = input[i].trim().split(" ").map(Number);

    let res = binary(val);
    console.log(res);
  }
}
function binary(val) {
  if (val == 0) {
    return 0;
  } else {
    return (val % 2) + 10 * binary(parseInt(val / 2));
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    15
    128`);
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
