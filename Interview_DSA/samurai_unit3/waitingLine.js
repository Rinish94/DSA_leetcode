function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let queue = [];
  for (let i = 0, j = 1; i < test; i++) {
    let arr = input[j++].trim().split(" ");
    // console.log(arr[0])
    let res = [];
    if (arr[0] == "E") {
      queue.push(arr[1]);
      console.log(queue.length);
    } else if (arr[0] == "D") {
      if (queue.length == 0) {
        console.log("-1" + " " + queue.length);
      } else {
        res.push(queue[0]);
        // console.log(queue[0])
        queue.shift();
        // console.log(queue)
        console.log(res + " " + queue.length);
      }
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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
