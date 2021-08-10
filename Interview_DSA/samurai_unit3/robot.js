function runProgram(input) {
  var input = input.trim().split("\n");
  var test = +input[0].trim();
  let line = 1;
  //   console.log(test)
  for (var i = 0; i <= test; i++) {
    let n = +input[line++];
    let str = input[line++];
    // console.log(n,str)
    let res = robot(0, n - 1, str);
    console.log(res);
  }

  function robot(l, r, str) {
    if (l === r) {
      return str[l];
    } else {
      if (l < r) {
        var mid = Math.floor((l + r) / 2);
        // console.log(mid);
        return str[mid] + robot(l, mid - 1, str) + robot(mid + 1, r, str);
      } else return "";
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  3
  abc
  4
  abcd
  11
  abcdefghijk
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
