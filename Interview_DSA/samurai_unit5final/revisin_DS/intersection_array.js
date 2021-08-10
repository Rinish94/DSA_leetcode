function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let n = input[1].trim().split(" ").map(Number);
  let m = input[2].trim().split(" ").map(Number);
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < m.length; j++) {
      //console.log(n[i]+" "+m[j])
      if (n[i] === m[j]) {
        console.log(n[i]);
        break;
      }
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  1 2 3 4 5
  5 6 7 8 9`);
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
