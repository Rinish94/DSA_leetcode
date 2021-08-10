function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let [m, n] = input[line++].trim().split(" ").map(Number);
    let boys = input[line++].trim().split(" ").sort((a,b) =>(a-b)).map(Number);
    let girls = input[line++].trim().split(" ").sort((a,b) =>(a-b)).map(Number);
    let res = height(boys, girls, m);
    if (res) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

function height(arr1, arr2, m) {
  for (let i = 0; i < m; i++) {
    if (arr1[i] <= arr2[i]) {
      return false;
    }
  }
  return true;
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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
