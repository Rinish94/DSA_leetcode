function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let arr = input[0].trim().split(" ").map(Number);

  let res = perm(arr, 0, arr.length - 1);
  ans = ans.sort();
  for (let i = 0; i < ans.length; i++) {
      console.log(ans[i].split('').join(' '))
  }
}
var ans = [];
function perm(arr, left, right) {
  if (left === right) {
    ans.push(arr.join(""));
    // console.log(arr.toString());
    return;
  }

  for (let i = left; i <= right; i++) {
    [arr[left], arr[i]] = [arr[i], arr[left]]; // swapping technique 

    perm(arr, left + 1, right);
    [arr[left], arr[i]] = [arr[i], arr[left]];
  }
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
    1 2 3`);
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
