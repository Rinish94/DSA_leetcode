function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let arr = input[0].trim().split(" "); //9,1,11
  let k = +input[1].trim();
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        flag = true;
      }
 
    }
  }
  console.log(flag ? "yes" : "no");
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
