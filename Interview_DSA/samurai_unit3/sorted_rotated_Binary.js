function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);

  if (Sort_Rotated(arr, n)) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  function Sort_Rotated(arr, n) {
    let left = 0;
    let right = n - 1;
    let val = -1;
    if (arr[left] > arr[right]) {
      val = NumVal(arr, left, right);
      let temp = val;

      if (left < val) {
        while (val > left) {
          if (arr[val] < arr[val - 1]) {
            return false;
          }
          val--;
        }
      } else {
        val = temp;
        val++;
        while (val < right) {
          if (arr[val] > arr[val + 1]) {
            return false;
          }
          val++;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  function NumVal(arr, low, high) {
    if (high < low) {
      return -1;
    }
    if (high == low) {
      return low;
    }
    let mid = parseInt((low + high) / 2);
    if (mid < high && arr[mid] + 1 < arr[mid]) {
      return mid;
    }
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }
    if (arr[low] > arr[mid]) {
      return NumVal(arr, low, mid - 1);
    } else {
      return NumVal(arr, mid + 1, high);
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    3 4 7 9 1 2`);
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
