function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let res = searchRotated(arr, n, k);
  console.log(res);
}
function searchRotated(arr, n, k) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && arr[mid] >= k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= k && arr[high] >= k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 1
  3 4 5 1 2`);
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
