function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    let res = swap(n, k, arr);
    console.log(res.join(' '));
  }
}

function swap(n, k, arr) {
  let status;
  for (let i = 0; i < n; i++) {
    status = i;
    for (let j = i + 1; j < n; j++) {
      if (j - i > k) {
        break;
      }
      if (arr[j] < arr[status]) {
        status = j;
      }
    }
    for (let j = status; j > i; j--) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      k--;
    }
  }
  return arr;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3 2
    5 3 1
    5 3
    8 9 11 2 1`);
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
