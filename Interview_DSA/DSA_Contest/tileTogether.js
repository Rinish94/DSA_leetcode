function runProgram(input) {
  let [N, M] = input.trim().split(" ").map(Number);
  // console.log(N,M)
  let total = 0;
  console.log(find(N));
  function find(x) {
    x = x.toString();
    let str = x.trim().split("");
    // console.log(str)
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    total = Number(x) + sum;
    // console.log(total)
    if (total == M) {
      // console.log(total)
      return total;
    } else if (total > M) {
      // console.log(-1)
      return -1;
    }
    return find(total);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`32 47`);
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
