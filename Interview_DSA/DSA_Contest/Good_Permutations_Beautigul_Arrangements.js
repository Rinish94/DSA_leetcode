function runProgram(input) {
  input = input.trim();
  let num = +input[0].trim();
  //    console.log(num)
  let res = good_permutations(num);
  console.log(res);
}
function good_permutations(n) {
  let nums = [...new Array(n).keys()].map((ele) => ele + 1);
  let count = 0;

  subordinate(nums, []);

  function subordinate(nums, arr) {
    if (arr.length > 0) {
      let len = arr.length;
      if (!(arr[len - 1] % len == 0 || len % arr[len - 1] == 0)) {
        return;
      }
    }
    if (arr.length == nums.length) {
      count++;
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) {
        continue;
      }

      subordinate(nums, [...arr, nums[i]]);
    }
  }
  return count;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`10`);
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
