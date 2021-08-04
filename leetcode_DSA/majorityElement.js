function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(n)
    // console.log(arr)
    let res = majority(arr, n);
    console.log(res);
  }
}

function majority(arr, n) {
  let maj_index = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > 3) {
      if (arr[maj_index] == arr[i]) {
        count++;
      } else {
        count--;
      }
      if (count == 0) {
        maj_index = i;
        count = 1;
      }
    }
  }
  //   console.log(arr[maj_index])
  if (count > n / 2) {
    return arr[maj_index];
  } else {
    return -1;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  3
  9 5 6
  1
  9
  2
  3 9
  3
  7 7 9
  8
  1 3 3 1 4 4 1 5`);
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

// function runProgram(input) {
//     input = input.trim().split("\n");
//     let test = +input[0].trim();
//     let line = 1;
//     for (let i = 0; i < test; i++) {
//       let n = +input[line++].trim();
//       let arr = input[line++].trim().split(" ").map(Number);
//       // console.log(n)
//       // console.log(arr)
//       let res = majority(arr, n);
//       console.log(res);
//     }
//   }

//   function majority(arr, n) {
//     let maxCount = 0;
//     let index = -1;
//     for (let i = 0; i < n; i++) {
//       let count = 0;
//       for (let j = 0; j < n; j++) {
//         if (arr[i] == arr[j]) {
//           count++;
//         }
//       }
//       if (count > maxCount) {
//         maxCount = count;
//         index = i;
//       }
//     }
//     // console.log(count)
//     if (maxCount > n / 2) {
//       return arr[index];
//     } else {
//       return -1;
//     }
//   }
//   if (process.env.USERNAME === "Ashutosh Pandey") {
//     runProgram(`2
//       6
//       1 1 1 1 2 3
//       5
//       1 1 2 2 3`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
