function runProgram(input) {
  input = input.trim().split("\n");
  let [a, d] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let len = 0;
  let j = 0;
  var b = [];
  len = arr.length;
  for (let i = d; i < len; i++) {
    b[j] = arr[i];
    j++;
  }
  for (let i = 0; i < d; i++) {
    b[j] = arr[i];

    j++;
  }
  console.log(b);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 4
    1 2 3 4 5`);
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
