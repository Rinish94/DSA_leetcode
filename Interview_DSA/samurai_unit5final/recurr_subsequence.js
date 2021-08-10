function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
//   console.log(n)
  input.shift();
  let str = input[0].trim();
  let list = "";

  subSequence(str, list, n);
  //   console.log(output);
}
function subSequence(str, list, n, i = -1) {
  if (i == n) {
    return;
  }
  if (list != "") {
    console.log(list);
  }
  for (let j = i + 1; j < n; j++) {
    list += str[j];
    subSequence(str, list, n, j);
    list = list.slice(0, list.length - 1);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
        abcd`);
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
