function runProgram(input) {
  input = input.trim().split("\n");
  let [n, c, r] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  //console.log(arr)
  let res = 0;
  for (let i = 0; i < c; i++) {
    res += arr[i];
  }
  if (res <= r) {
    console.log("Party");
  } else {
    console.log("sad");
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 3 24
    6 4 21 20 13`);
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
