function runProgram(input) {
  input = input.trim().split("\n");
  let num = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let x = +input[2].trim();
  occurences(arr, x);
}

function occurences(arr, x) {
  let n = arr.length;
  let first = -1;
  let last = -1;
  let count =0
  for (let i = 0; i <= n; i++) {
    if (x !== arr[i]) continue;
    if (first === -1) {
      first = arr[i];
      last = arr[i];
      count++
    }
  }

  if (first != -1) {
    console.log(first,last,count);
  } else {
    console.log("-1 -1 0");
  }
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    2 1 1 2 2 2	
    1`);
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
