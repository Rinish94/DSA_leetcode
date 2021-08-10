function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let val_odd = 0;
  let val_even = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      val_even += arr[i];
    } else {
      val_odd += arr[i];
    }
  }

  console.log(val_odd > val_even ? "Odd" : "Even");
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
    1 2 3 4`);
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
