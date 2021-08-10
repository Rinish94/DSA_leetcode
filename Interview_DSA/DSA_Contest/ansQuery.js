// find all the elements of 2nd array is available in 1st array?
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let arr = input[1].trim().split(" ").map(Number);
  let q = input[3].trim().split(" ").map(Number);
  // console.log(arr, q)
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = true;
    }
  }
  for (let j = 0; j < q.length; j++) {
    if (obj[q[j]]) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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
