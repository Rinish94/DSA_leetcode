function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let arr = input[0].trim().split(" ").map(Number);
  //console.log(arr)
  let n = arr.length;
  //console.log(n)
  let temp;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  let a = arr.join(" ");
  console.log(a);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    3 5 0 9 8`);
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
