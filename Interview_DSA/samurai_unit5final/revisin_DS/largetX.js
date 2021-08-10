function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  input.shift();
  let len = 0;
  //   let arr = [];
  //   let n =0
  for (let i = 0; i < test; i++) {
    let n = input[len++].trim().split(" ").map(Number);
    let arr = input[len++].trim().split(" ").map(Number);
    // console.log(n);
    // console.log(arr);
    largest(arr, n);
  }
}

function largest(arr, n) {
  console.log(arr, n)
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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
