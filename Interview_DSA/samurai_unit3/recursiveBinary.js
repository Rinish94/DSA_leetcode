function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log(k);
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  //   console.log(arr);
  //   let low = 0;
  //   let high = arr.length - 1;
  function IterativeBinary(arr, low = 0, high = arr.length - 1, k) {
    if (low > high) {
      return -1;
    }

    let mid = low + Math.floor((high - low) / 2);
    let mid_value = arr[mid];

    if (mid_value === k) {
      return 1;
    } else if (mid_value < k) {
      return IterativeBinary(arr, mid + 1, high, k);
    } else {
      return IterativeBinary(arr, low, mid - 1, k);
    }
  }
  let result = IterativeBinary(arr, 0, n - 1, k);
  console.log(result);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 0
  2 -2 0 3 4`);
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
