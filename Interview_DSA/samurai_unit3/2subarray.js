function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input)
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  for (let i = 0; i < test; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    arr = input[line++].trim().split(" ").map(Number);
    //  console.log(arr);
    let sum = arr[0];
    let flag = false;
    let start = 0;
    for (let j = 1; j < arr.length; j++) {
      if (flag === false) {
        // console.log( sum - arr[start])
        while (sum > k && start < j - 1) {
          sum = sum - arr[start];
          start++;
        }
        if (sum === k || arr[j] === k) {
          console.log("Yes");
          flag = true;
          break;
        }
        if (j < arr.length) {
          sum += arr[j];
        }
      }
    }
    if (flag === false) {
      console.log("No");
     }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
  5 3
  1 2 1 3 4
  
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
