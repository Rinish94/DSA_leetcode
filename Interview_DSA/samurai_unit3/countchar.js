function runProgram(input) {
  // Write code here
  input = input.trim();
  let str = input.trim();

  const obj = {};

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (!obj[ch]) {
      obj[ch] = 0;
    }
    obj[ch]++;
  }
  let string = "";
  for (x in obj) {
    string += x + obj[x];
  }
  console.log(string);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`aaabbbcccaaa`);
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
