function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let str = input[0].trim();

  console.log(lexicographicString(str));
}

function lexicographicString(str) {
  let charMax = "a";
  let index = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= charMax) {
      charMax = str[i];
      index.push(i);
    }
  }
  let stringMax = "";
  for (let i = 0; i < index.length; i++) {
    if (str.substring(index[i], str.length) > stringMax) {
      stringMax = str.substring(index[i], str.length);
    }
  }
  return stringMax;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    ababaa`);
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
