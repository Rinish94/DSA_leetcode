function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let n = +input[i].trim().split(" ");
    let result = rootBinary(n);
    console.log(result);
    function rootBinary(n) {
      if (n == 0 || n == 1) return n;

      let start = 1;
      let end = n;
      let answer;
      while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (mid * mid === n) {
          return mid;
        } else if (mid * mid > n) {
          end = mid - 1;
          answer = end;
        } else {
          start = mid + 1;
        }
      }
      return answer;
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
  4   
  8`);
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
