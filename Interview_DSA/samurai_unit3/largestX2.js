function runProgram(input) {
  input = input.trim().split("\n");
  let tests = Number(input[0].trim());
  let line = 1;
  for (let i = 0; i < tests; i++) {
    let n = Number(input[line].trim());
    getLargest(input[line + 1].trim().split(" ").map(Number), n);
    line += 2;
  }
}
function getLargest(nums, n) {
  nums.sort((a, b) => b - a);
  let flag = false;
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      val = nums[i];
      for (let j = n - 1; j >= 0; j--) {
        if (nums[j] >= 0) {
          if (val === nums[j]) {
            console.log(-1);
            return;
          }
          break;
        }
        if (val === -nums[j]) {
          console.log(val);
          flag = true;
          return;
        }
      }
    } else if (nums[i] > 0 && !flag) {
      val = nums[i];
      for (let j = n - 1; j >= 0; j--) {
        if (nums[i] === val && nums.length === 2) {
          console.log(-1);
          return;
        }
      }
    } else if (!flag) {
      console.log(-1);
      break;
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    9
    -10 -6 4 9 1 5 -1 -4 7
    10
    1 -6 6 -4 3 5 2 4 -2 2
    9
    4 3 -6 -4 -8 8 7 -1 2
    2
    8 -6
    8
    -7 -3 5 7 -1 3 1 -5
     `);
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
