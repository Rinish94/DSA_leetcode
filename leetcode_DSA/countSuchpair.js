function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < n; i++) {
    // console.log(arr[i] +"--"+arr[i+1])
    for (let j = i + 1; j < n; j++) {
      // console.log(arr[i]+"--"+arr[j])
      if (arr[i] + arr[j] === k) {
        count++;
      }
    }
  }
  console.log(count)
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 9
    3 0 6 2 7`);
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
