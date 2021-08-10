function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let curr = 1;
  let arr = [];

  function gifts(n, k, curr, arr) {
    if (arr.length === k) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = curr; i <= n; i++) {
      //    console.log(i)
      arr.push(i);
      gifts(n, k, i + 1, arr);
      arr.pop();
      //    console.log(arr)
    }
  }
  gifts(n, k, curr, arr);
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 2`);
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
