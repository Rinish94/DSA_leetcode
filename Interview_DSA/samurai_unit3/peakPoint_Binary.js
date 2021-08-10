function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 1; i <= test; i++) {
    let n = +input[line++].trim().split(" ");
    let arr = input[line++].trim().split(" ").map(Number);
    let len = arr.length;
    console.log(findPeak(arr, len));
  }
}

function peak(arr, low, high, len) {
  let mid = low + Math.floor((high - low) / 2);
  //   console.log(mid);
  if (arr[mid - 1] <= arr[mid] && arr[mid + 1] <= arr[mid]) {
    return mid;
  } else if (mid > 0 && arr[mid - 1] > arr[mid]) {
    return peak(arr, low, mid - 1, len);
  } else {
    return peak(arr, mid + 1, high, len);
  }
}
function findPeak(arr, len) {
  return peak(arr, 0, len - 1, len);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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
