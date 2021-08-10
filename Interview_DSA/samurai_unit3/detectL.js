function runProgram(input) {
  input = input.trim().split("\n");

  let test = +input[0];

  let line = 1;
  for (let i = 0; i < test; i++) {
    let [rows, cols] = input[line++].trim().split(" ").map(Number);
    let mat = [];

    for (let j = 0; j < rows; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }

    //console.log(mat)
    let left = 0;
    let bottom = 0;
    let newArray = [];
    while (left < cols && bottom > 0) {
      for (let k = 0; k < rows - 1; k++) {
        // newArray.push(arr[rows][k]);
        newArray.push(mat[rows][k]);
      }
      for (let l = 1; l < cols; l++) {
        newArray.push(mat[cols][l]);
      }
    }
    left++
    bottom--
    console.log(newArray);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
  4 3
  1 2 3
  4 5 6
  7 8 9
  10 11 12`);
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

//  for (let k = 0, m = rows - 1; k < rows, m >= 0; k++, m--) {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (j == k) {
//         console.log(i, j);
//         //   left++;
//       } else if (i == m) {
//         console.log(i, j);
//         //   bottom--;
//       }
//     }
//   }
// }

//

// for (let k = 0; k < rows; k++) {
//   console.log(mat[k].join(" "));
// }

// console.log()
