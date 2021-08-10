function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log(n,k)
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  //   console.log(arr);
  let result = upperBound(arr, k);
  console.log(result);

  function upperBound(arr, k) {
    let answer = -1;
    let low = 0;
    let high = arr.length;

    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);
      //   console.log(mid_value)
      if (arr[mid] <= k) {
        low = mid + 1;
      } else {
        answer = mid;
        high = mid - 1;
      }
    }
    return answer;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`10 6
  0 2 4 4 5 5 7 7 9 10`);
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
