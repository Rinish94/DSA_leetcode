function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let arr = input[0].trim().split(" ").map(Number);
  //console.log(arr)
  let n = arr.length;
  //console.log(n)
  let temp;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      //console.log(arr[j] + "  " +arr[j+1])
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //console.log(arr)
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
