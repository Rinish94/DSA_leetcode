function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let j = 1;
  for (let i = 0; i < test; i++) {
    let [row, col] = input[j++].trim().split(" ").map(Number);
    let obj = {};

    for (let k = 0; k < row; k++) {
      let arr = input[j++].trim().split(" ").map(Number);
      let temp = {};
      for (let x = 0; x < arr.length; x++) {
        let num = arr[x];
        if (temp[num] === undefined) temp[num] = 1;
      }
      for (let n in temp) {
        if (obj[n] === undefined) obj[n] = 1;
        else obj[n]++;
      }
    }
    let count = 0;
    for (let n in obj) {
      if (obj[n] === row) count++;
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
