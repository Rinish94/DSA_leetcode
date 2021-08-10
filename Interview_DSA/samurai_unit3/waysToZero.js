function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let n = +input[0].trim();
  //   console.log(n);

  function counter(m) {
    if (m == 0) return 0;
    else return 1 + counter(parseInt(m / 10));
  }

  function steps(x) {
    let c = 0;
    let last = x;
    while (last > 0) {
      let digits = counter(last);
      digits -= 1;
      let divisor = parseInt(Math.pow(10, digits));
      let first = parseInt(last / divisor);
      let lastnumber = first * divisor;
      let skipped = parseInt((last - lastnumber) / first);
      skipped += 1;
      c += skipped;
      last = last - first * skipped;
    }
    return c;
  }
  console.log(steps(n));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
4`);
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
