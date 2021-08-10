function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  for (let i = 0; i < test; i++) {
    let sum = 0;
    let [cases, k] = input[line++].trim().split(" ").map(Number); //1=>2
    // console.log(cases, k);
    arr = input[line++].trim().split(" ").map(Number); //2=>3
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      for (let l = j + 1; l < arr.length; l++) {
        // console.log(arr[j]+" " + arr[l])
        if (arr[j] + arr[l] === k) {
          count++;
          // console.log("1");
          break;
        }
      }
    }
    if (count > 0) {
      console.log("1");
    } else {
      console.log("-1");
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    5 2         
    3 4 0 2 7    
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
