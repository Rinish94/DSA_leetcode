function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  //    console.log(n)
  let queue = [];
  let stack = [];

  for (let i = 0, j = 1; i < n; i++) {
    let arr = input[j++].trim().split(" ");
    // console.log(arr);
    if (arr[0] == "1") {
      queue.push(arr[1]);
    }
    if (arr[0] == "5") {
      let person = queue.shift();

      stack.push(person);
    } else if (arr[0] == "2") {
      stack.push(arr[1]);
    }

    if (arr[0] == "3") {
      console.log(queue[0]);
    } else if (arr[0] == "4") {
      console.log(stack[stack.length - 1]);
    }

    if (queue.length === 0) {
      console.log(-1)
    }
    if (stack.length == 0) {
      console.log(-1)
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
