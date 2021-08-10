function runProgram(input) {
  input = input
    .trim()
    .split("\n")
    .map((a) => parseInt(a));

  var n = Number(input[0]);

  input.shift();

  var arr = input;

  // console.log(arr)
  var next_greater = nextGreater();
  var next_smaller = nextSmaller();

  var ans = [];
  for (var i = 0; i < n; i++) {
    if (next_greater[i] != -1 && next_smaller[next_greater[i]] != -1) {
      ans.push(arr[next_smaller[next_greater[i]]]);
    } else {
      ans.push(-1);
    }
  }

  console.log(ans.join(" "));

  function nextGreater() {
    var stack = [];
    stack[0] = n - 1;
    var res = [];
    res[n - 1] = -1;
    for (var i = n - 2; i >= 0; i--) {
      while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        res[i] = -1;
      } else {
        res[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    // console.log(res)
    return res;
  }

  function nextSmaller() {
    var stack = [];
    stack[0] = n - 1;
    var res = [];
    res[n - 1] = -1;
    for (var i = n - 2; i >= 0; i--) {
      while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        res[i] = -1;
      } else {
        res[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    // console.log(res)
    return res;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`8
    3
    7
    1
    7
    8
    4
    5
    2`);
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
