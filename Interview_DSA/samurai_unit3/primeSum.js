function runProgram(input) {
  // Write code here
  input = input.trim();
  let num = +input;
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++
  }
  console.log(sum);
  function isPrime(val) {
    for (let i = 2; i < val; i++) {
      if (val % i === 0) return false;
    }
    return val !== 1 && val !== 0;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`13`);
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
