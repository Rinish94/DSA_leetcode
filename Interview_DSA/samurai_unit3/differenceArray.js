function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  for (let i = 0; i < test; i++) {
    let num = input[line++].trim().split(" ").map(Number);
    arr = input[line++].trim().split(" ").map(Number);
    let arr2 = arr.map(Number);
    let sort = (val) => {
      let size = val.length;
      // console.log(val)
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (val[j] > val[j + 1]) {
            let temp = val[j];
            val[j] = val[j + 1];
            val[j + 1] = temp;
          }
        }
      }
      // console.log(arr)
    };
    sort(arr2);
    // console.log(arr2);
    let res = "";
    for (let m = 0; m < arr.length; m++) {
      for (n = 0; n < arr.length; n++) {
        if (arr[m] === arr2[n]) {
          res += m - n + " ";
        }
      }
    }
    console.log(res);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    5 
    1 4 2 3 5
    5
    5 4 3 2 1`);
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
