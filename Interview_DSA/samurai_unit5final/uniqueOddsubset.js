//You are given an arrayAof sizeN, and an integerK

//You have to find out if there is a subset in the arrayA, such that

//1. The number of distinct elements in the subset is `K`
//2. The sum of all the elements in the subset is odd
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim().split(" ");
  let arr = input[1].trim().split(" ").map(Number);
  let k = +input[2].trim();
  unique(arr);
  for (let i = 0; i < output.length; i++) {
    output[i] = output[i].split(" ").map(Number);
    if (output[i].length === k) {
      let sum = output[i].reduce((a, b) => a + b);
      if (sum % 2 === 1) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    } else {
      flag = false;
    }
  }
  if (flag) {
    console.log("True");
  } else {
    console.log("False");
  }
  function unique(arr, res = [], i = -1) {
    if (i === arr.length) {
      return;
    }
    if (res.length !== 0) {
      output.push(res.join(" "));
    }

    for (let j = i + 1; j < arr.length; j++) {
      res.push(arr[j]);
      unique(arr, res, j);
      res.pop();
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  2 2 2
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
