function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let queue1 = [];
  let queue2 = [];
  let queue3 = [];
  let queue4 = [];
  let masterQueue = [];

  for (let i = 0, j = 1; i < n; i++) {
    let arr = input[j++].trim().split(" ");
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    // console.log(arr)
    if (arr[0] == "E") {
      if (arr[1] == "1") {
        queue1.push(arr[2]);
        for (let val of masterQueue) {
          if (val === "1") {
            flag1 = true;
          }
        }
        if (!flag1) {
          masterQueue.push(arr[1]);
        }
      } else if (arr[1] == "2") {
        queue2.push(arr[2]);
        for (let val of masterQueue) {
          if (val === "2") {
            flag2 = true;
          }
        }
        if (!flag2) {
          masterQueue.push(arr[1]);
        }
      } else if (arr[1] == "3") {
        queue3.push(arr[2]);
        for (let val of masterQueue) {
          if (val === "3") {
            flag3 = true;
          }
        }
        if (!flag3) {
          masterQueue.push(arr[1]);
        }
      } else if (arr[1] == "4") {
        queue4.push(arr[2]);
        for (let val of masterQueue) {
          if (val === "4") {
            flag4 = true;
          }
        }
        if (!flag4) {
          masterQueue.push(arr[1]);
        }
      }
    } else if (arr[0] == "D") {
      if (masterQueue[0] == "1") {
        console.log(masterQueue[0] + " " + queue1[0]);
        queue1.shift();
        if (queue1.length == 0) {
          masterQueue.shift();
        }
      } else if (masterQueue[0] == "2") {
        console.log(masterQueue[0] + " " + queue2[0]);
        queue2.shift();
        if (queue2.length == 0) {
          masterQueue.shift();
        }
      } else if (masterQueue[0] == "3") {
        console.log(masterQueue[0] + " " + queue3[0]);
        queue3.shift();
        if (queue3.length == 0) {
          masterQueue.shift();
        }
      } else if (masterQueue[0] == "4") {
        console.log(masterQueue[0] + " " + queue4[0]);
        queue4.shift();
        if (queue4.length == 0) {
          masterQueue.shift();
        }
      }
    }
  }
  // console.log(queue1)
  // console.log(masterQueue)
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
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
