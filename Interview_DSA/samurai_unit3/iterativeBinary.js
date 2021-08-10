function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log(n)
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  //   console.log(arr);

  function IterativeBinary(arr, low, high, k) {
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      let mid_value = arr[mid];
      //   console.log(mid_value);

      if (mid_value === k) {
        return 1;
      } else if (mid_value < k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
  let result = IterativeBinary(arr, 0, arr.length - 1, k);
  console.log(result);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6 5
  11 34 5 4 21 0`);
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
