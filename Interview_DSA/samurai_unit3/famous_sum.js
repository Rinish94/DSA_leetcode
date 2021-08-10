function runProgram(input) {
  input = input.trim().split(" ");
  let k = +input[1].trim();
  //   console.log(k);
  let n = input[0].trim().split("").map(Number);
  console.log(n);
  let sum = n.reduce((a, b) => a + b);
  let output = Super_digit((sum * k).toString());
  console.log(output);

  function Super_digit(num) {
    if (num.length <= 1) {
      return num;
    }
    //   console.log(num)
    num = num.split("").map(Number);
    //   console.log(num)
    let sum = num.reduce((a, b) => a + b);

    return Super_digit(sum.toString());
  }

}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`148 3`);
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
