function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let sum = +input[2].trim();
  exists(arr, n, sum);
}

function exists(arr, n, sum) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    let goal = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > sum) {
        continue;
      }
      goal += arr[j];
      if (goal == sum) {
        flag = true;
      }
      console.log(arr[i] + " " + arr[j], goal);
    }
  }
  console.log(flag ? "yes" : "no");
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  1 2 3 6 9
  16`);
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
