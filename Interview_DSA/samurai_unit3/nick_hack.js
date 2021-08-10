function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input)
  let test = +input[0].trim();
  // console.log(test)
  input.shift();
  let value = 0;
  let c = 1;
  let flag = false;
  while (value < test) {
    let n = Number(input[0]);

    if (hack(c, n)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    input.shift();
    // console.log(input);
    value++;
  }

  function hack(c, n) {
    if (c === n) {
      return true;
    } else if (c > n) {
      return false;
    } else if (hack(c * 10, n)) {
      return true;
    } else if (hack(c * 20, n)) {
      return true;
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  1
  2
  10
  25
  200`);
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
