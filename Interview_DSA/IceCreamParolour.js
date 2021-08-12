// Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.

// Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

// Example.

// The two flavors that cost  and  meet the criteria. Using -based indexing, they are at indices  and .

// Function Description

// Complete the icecreamParlor function in the editor below.

// icecreamParlor has the following parameter(s):

// int m: the amount of money they have to spend
// int cost[n]: the cost of each flavor of ice cream
// Returns

// int[2]: the indices of the prices of the two flavors they buy, sorted ascending
// Input Format

// The first line contains an integer, , the number of trips to the ice cream parlor. The next  sets of lines each describe a visit.

// Each trip is described as follows:

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;

  for (let i = 0; i < test; i++) {
    let k = +input[line++].trim();
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);

    let answer = iceCream(arr, n, k);
    console.log(answer.join(" "));
  }

  function iceCream(arr, n, k) {
    let res = [];
    for (let i = 0; i <= n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (arr[i] + arr[j] === k) {
          res.push(i + 1, j + 1);
          break;
        }
      }
    }
    return res;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2          
    4          
    5           
    1 4 5 3 2  
    4           
    4           
    2 2 4 3`);
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
