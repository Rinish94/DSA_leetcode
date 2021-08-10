function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  //    console.log(n,k)
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  // console.log(arr)
  let result = occurenceBinary(arr, k);

  console.log(result);
  function upperBound(arr, k) {
    let answer = -1;
    let low = 0;
    let high = arr.length;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      //   console.log(mid_value)
      if (arr[mid] == k) {
        answer = mid;
        low = mid + 1;
      } else if (arr[mid] > k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return answer;
  }

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

  function occurenceBinary(arr, k) {
    lowerBound = lowerBound(arr, k);
    upperBound = upperBound(arr, k);

    if (lowerBound == -1) return 0;
    let ans = upperBound - lowerBound + 1;
    return ans;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6 3
    2 3 3 3 6 9`);
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
