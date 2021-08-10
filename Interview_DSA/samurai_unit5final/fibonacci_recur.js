function runProgram(input) {
  input = input.trim();
  let num = +input;
  //   console.log(num)
  function factorial(n) {
    // if (num == 1) {
    //   return [0, 1];
    // }
    // else {
    //   let res = factorial(num-1)
    //   res.push(res[res.length -1 ] + res[res.length - 2])
    //   return res
    // }
    let f = new Array(n+2); // 1 extra to handle case, n = 0
    let i;
    /* 0th and 1st number of the series are 0 and 1*/
    f[0] = 0;
    f[1] = 1;
    for (i = 2; i <= n; i++)
    {
        /* Add the previous 2 numbers in the series
        and store it */
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
  }
  let result = factorial(num)
  console.log(result)
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5`);
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
