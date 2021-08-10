function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  let mid;
  for (let m = 0; m < test; m++) {
    let [cases, k] = input[line++].trim().split(" ").map(Number); //1=>2
    arr = input[line++]
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number); //2
    //console.log(arr);

    console.log(suchpair(arr, 0, arr.length - 1, mid));

    function suchpair(arr, i, j, mid) {
      while (i < j) {
        mid = arr[i] + arr[j];
        if (mid === k) {
          return 1;
        } else if (mid > k) {
          j--;
        } else {
          i++;
        }
      }
      return -1;
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
