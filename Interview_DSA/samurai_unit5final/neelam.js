function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let count = 0;
  let out = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[j] <= arr[i]) {
      count++;
    } else if (i !== n - 1) {
      out += arr[j] * count
      j=i;
      count = 1;
    }
    if (i == n - 1) {
      out += arr[j] * count;
    
    }
  }
  console.log(out);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`10
  13 4 17 17 19 1 7 18 20 7`);
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
