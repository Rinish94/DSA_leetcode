function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let len = 1;
  for (let m = 0; m < test; m++) {
    let [n, k] = input[len++].trim().split(" ").map(Number);
    let arr = input[len++]
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number);
    //   console.log(n,k)
    //   console.log(arr)

    let i = 0;
    let j = arr.length - 1;
    count = 0;
    while (i < j) {
      if (arr[i] + arr[j] > k) {
        count += 1;
        j -= 1;
      } else {
        i += 1;
        j -= 1;
        count += 1;
      }
      if (i == j) {
        count += 1;
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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
