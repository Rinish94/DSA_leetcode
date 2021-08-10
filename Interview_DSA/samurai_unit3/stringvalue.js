function runProgram(input) {
  input = input.trim();
  let str = input.trim();
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let sum = 0;
  for (let i = 0; i < alpha.length; i++) {
    //console.log(alpha[i+1])
    for (let j = 0; j < str.length; j++) {
      //console.log(i+"  "+alpha[i]+"  "+str[j]+"  "+j)
      if (alpha[i] === str[j]) {
        sum += i+1;
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`aba`);
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
