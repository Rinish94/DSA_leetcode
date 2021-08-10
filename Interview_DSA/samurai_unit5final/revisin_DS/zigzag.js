function runProgram(input) {
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(" ").map(Number);

  let mat =""
  for (let i = 1; i < input.length; i++) {
    let r = input[i].trim();
    // console.log(r);
    mat +=(i%2 ===1? r.split(' ').reverse().join(' '):r)+" "
}
console.log(mat)
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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
