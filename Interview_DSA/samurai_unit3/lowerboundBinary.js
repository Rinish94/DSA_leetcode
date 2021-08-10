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
  let result = lowerBound(arr, k);
  console.log(result);

  function lowerBound(arr, k) {
    ans = -1;
    low = 0;
    high = arr.length - 1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      //  console.log(mid)
      if (arr[mid] == k) {
        ans = mid;
        high = mid - 1;
      } else if (arr[mid] < k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`7 1
  1 1 4 5 6 7 8`);
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
