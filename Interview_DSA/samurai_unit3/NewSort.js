function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log(n,k)
  let arr = input[1].trim().split(" ").map(Number);
  //console.log(arr)
  let dim = arr.length;
  let temp;
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      if (arr[j] % k > arr[j + 1] % k) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let a = arr.join(' ')
  console.log(a);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 6
    12 18 17 65 46`);
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
