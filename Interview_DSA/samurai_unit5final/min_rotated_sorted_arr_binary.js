function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  //    console.log(arr[0])
  let res = minSort(arr, 0, n - 1, arr[0]);
  console.log(res);
}

function minSort(arr, low, high, key) {
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] < key) {
      high = mid - 1;
      // console.log(arr[mid],arr[high])
    } else if (arr[mid] > key) {
      low = mid + 1;
    }
    if (arr[mid] === key) {
      return key;
    }
    if (arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    }
    if (arr[mid - 1] > arr[mid]) {
      return arr[mid];
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`15
  10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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
