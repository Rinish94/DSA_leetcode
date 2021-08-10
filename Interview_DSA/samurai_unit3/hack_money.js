function runProgram(input) {
  input = input.split("\n");
  let test = Number(input[0]);
  input.shift();
  let value = 0;
  while (value < test) {
    let n = Number(input[0]);
    // console.log(n)
    if (bankHack(n, 0) == 0) {
      console.log("No");
    }

    input.shift();
    console.log(input);
    value++;
  }
  function bankHack(n, rest) {
    if (n === 1 && rest === 0) {
      console.log("Yes");
      return 1;
    }

    if (n === 0 || rest !== 0) {
      return 0;
    }

    if (bankHack(Math.floor(n / 10), n % 10) === 0) {
      return bankHack(Math.floor(n / 20), n % 20);
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
