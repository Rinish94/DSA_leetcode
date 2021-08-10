//Given an array of N distinct integers. Check if this array is sorted and rotated counter-clockwise.

//A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  for (let i = 1; i < n; i++) {}

  let res = searchRotated(arr, 0, n - 1);
  if (res) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
function searchRotated(arr, low, high) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid - 1] < arr[mid]) {
      return true;
    } else if (arr[high] < arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`15
  10 11 12 13 14 15 -1 3 0 1 2 4 5 7 8`);
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
