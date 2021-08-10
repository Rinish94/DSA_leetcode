function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  for (let i = 0, j = 1; i < test; i++) {
    let dim = +input[j++].trim();
    // console.log(dim)
    let arr = input[j++].trim().split(" ").map(Number);
    let N = arr.length;

    if (IsTriangle(arr, N)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
  function IsTriangle(arr, N) {
    if (N < 3) return false;

    arr.sort();

    for (let i = 0; i < N - 2; i++)
      if (arr[i] + arr[i + 1] > arr[i + 2]) return true;

    return false;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3
    3 3 3
    3
    1 1 3`);
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
