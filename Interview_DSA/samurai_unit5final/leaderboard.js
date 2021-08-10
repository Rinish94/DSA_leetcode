function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  input.shift();
  let arr = input.map((val) => val.trim().split(" "));
  arr = sortBubble(arr);
//   console.log(arr);
  let rank = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      console.log(`${rank} ${arr[i][0]}`);
    }
   else if (arr[i][1] === arr[i - 1][1]) {
      console.log(`${rank} ${arr[i][0]}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${arr[i][0]}`);
    }
  }
}

function sortBubble(arr) {
  let n = arr.length;
//   console.log(arr)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (Number(arr[j][1]) <= Number(arr[j + 1][1])) {
        if (Number(arr[j][1]) === Number(arr[j + 1][1])) {
          if (arr[j][0] > arr[j + 1][0]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          } 
        } else {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
//   console.log(arr)
  return arr;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
