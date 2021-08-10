function runProgram(input) {
  var input = input.trim().split("\n");
  var test = +input[0].trim();
  let line = 1;
  //   console.log(test)
  for (var i = 0; i <= test; i++) {
    let n = +input[line++];
    let str = input[line++];
    // console.log(n,str)
    let res = encry(0, n - 1, str);
    console.log(res);
  }

  function encry(str) {
    str = str.split(" ");
    if (str.length === 0) {
      return str;
    }
    let n = Math.ceil(str.length / 2) - 1;
    return (
      str[n] +
      encry(str.slice(0, n).join("")) +
      encry(str.slice(n + 1).join(""))
    );
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
