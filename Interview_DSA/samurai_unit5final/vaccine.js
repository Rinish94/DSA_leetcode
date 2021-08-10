function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let arr1 = input[0].trim().split(" ").map(Number);
  let arr2 = input[1].trim().split(" ").map(Number);

  let flag = "Yes";
  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] < arr2[i]) flag = "No";
  }
  console.log(flag);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
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
