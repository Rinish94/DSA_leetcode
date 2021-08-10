function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let len = 1;
  let increase = 3;
  let decrease = 5;
  for (let i = 0; i < test; i++) {
    let [n, k] = input[len++].trim().split(" ").map(Number);
    let arr = input[len++].trim().split(" ").map(Number);
    //console.log(n,k,arr)
    let res = valFind(arr, n, k);
    console.log(res);
  }
  function valFind(arr, n, k) {
    let sumValue = [];

    for (let j = 0; j < n; j++) {
      let arrFinal = [];
      for (let i = 0; i < n; i++) {
        if (arr[j] <= arr[i]) {
          arrFinal.push((arr[i] - arr[j]) * decrease);
        } else {
          arrFinal.push((arr[j] - arr[i]) * increase);
        }
      }

      arrFinal.sort((a, b) => a - b);
      let add = 0;

      for (let i = 0; i < k; i++) {
        add += arrFinal[i];
      }
      sumValue.push(add);
      //   console.log(sumValue);
    }
    return Math.min(...sumValue);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    5 3
    9 4 9 7 4`);
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
