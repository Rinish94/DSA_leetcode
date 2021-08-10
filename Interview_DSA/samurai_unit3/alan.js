function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0].trim()
  let str = input[1].trim();

  let arr = [26];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let temp = char.charAt(i) - "a";

    arr[temp]++; //
}
console.log(arr);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
    aman`);
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
