function runProgram(input) {
  input = input.trim().split("\n");
  let k = +input[0].trim().split(" ");
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  let dept = input[2]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  let res = check(k, arr, dept);

  if (res) {
    console.log("Possible");
  } else {
    console.log("Not Possible");
  }
}

function check(k, arr, dept) {
  let count = 1;
  let i = 1;
  let j = 0;
  while (i < arr.length && j < dept.length) {
    //   console.log(i,j)
    if (arr[i] <= dept[j]) {
      count++;
      i++;
    } else {
      j++;
      count--;
    }
    if (count > k) {
      return false;
    }
  }
  return true;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
  4 3 6 7 11
  9 4 10 9 14`);
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
