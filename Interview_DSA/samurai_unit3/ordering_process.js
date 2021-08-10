function runProgram(input) {
  // input = input.trim().split("\n");
  input = input.split(/[\r\n]+/);
  input.shift();
  let cal_order = input[0].trim().split(" ").map(Number);
  // console.log(cal_order);
  input.shift();
  let ideal_process = input[0].trim().split(" ").map(Number);
  // console.log(ideal_process)
  let time = 0;
  for (let i = 0; i < ideal_process.length; i++) {
    let temp = ideal_process[i];
    // console.log(temp)
    // console.log(cal_order.shift())
    let match;
    while ((match = cal_order.shift()) !== temp) {
      cal_order.push(match);
      time++;
    }
    time++;
  }
  console.log(time);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
  3 2 1
  1 3 2`);
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
