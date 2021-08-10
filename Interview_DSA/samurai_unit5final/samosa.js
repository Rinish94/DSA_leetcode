function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  let pointer = 0;
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    val += arr[i];

    if (val > k) {
      console.log(pointer);
    } else {
      pointer++;
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 10
    5 4 2 4`);
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
