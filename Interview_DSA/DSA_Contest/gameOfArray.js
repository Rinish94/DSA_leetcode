function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  for (let i = 0; i < k; i++) {
    let temp = arr.shift();
    arr.push(temp);
  }
  console.log(arr.join(" "));
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6 4
  1 2 5 4 0 6`);
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
