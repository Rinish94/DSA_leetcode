function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let len = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[len++].trim().split(" ");
    let arr = input[len++]
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number);
    let q = +input[len++].trim().split(" ");
    //    console.log(n)
    //    console.log(arr)
    //    console.log(q)
    let odd = [];
    let even = [];
    for (let j = 0; j < n; j++) {
      if (arr[j] % 2 == 0) {
        even.push(arr[j]);
      } else {
        odd.push(arr[j]);
      }
    }
    // console.log(even);
    // console.log(odd);
    let ans = [];
    if (q == 1) {
      ans.push(...even, ...odd);
    } else if (q == 2) {
      ans.push(...odd, ...even);
    }
    console.log(ans.join(' '))
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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
