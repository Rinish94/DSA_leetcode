function runProgram(input) {
  input = input.trim();
  let str = input;
  if (str == null || str.length == 0)
    throw new Error("String should not be null or empty.");
  if (!isNaN(str[0])) throw new Error("First character should be a letter.");
  let retStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i == str.length - 1 || isNaN(str[i + 1])) {
      retStr += str[i];
    } else {
      let j = i + 1;
      let numberStr = "";
      while (!isNaN(str[j])) {
        numberStr += str[j];
        j++;
      }
      if (Number(numberStr) != 0) {
        for (let k = 0; k < Number(numberStr); k++) {
          retStr += str[i];
        }
      }
      i = j - 1;
    }
}
console.log(retStr);
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`a3b2`);
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
