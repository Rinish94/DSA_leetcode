function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tests; i++) {
    console.log(Product(Number(input[line++])));
  }
}

function Product(n) {
  let extraval = [];
  let check = [];
  let str = "1";
  extraval.push(str);
  while (extraval.length !== 0) {
    str = extraval.shift();
    let rem = Number(str) % n;
    if (rem === 0) {
      return str;
    }
    if (!check.includes(str)) {
      check.push(str);
      extraval.push(str + "0");
      extraval.push(str + "1");
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    17
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
