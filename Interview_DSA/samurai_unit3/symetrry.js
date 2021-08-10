function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];

  for (let i = 0, j = 1; i < tests; i++) {
    let dim = +input[j++];
    //console.log(dim)
    let arr = [];
    for (let k = 0; k < dim; k++) {
      arr[k] = input[j++].trim();
    }
    //console.log(arr)
    let fH = true;
    let fV = true;
    for (let k = 0, y = dim - 1; k < dim; k++, y--) {
        //console.log(arr[k] +"  "+ arr[y])
      if (arr[k] !== arr[y]) fH = false;
      if (fV) {
        for (let x = 0, m = dim - 1; x < dim / 2; x++, m--) {
           //console.log(arr[k][x]+"  "+arr[k][m])
          if (arr[k][x] !== arr[k][m]) {
            fV = false;
            break;
          }
        }
      }
      if (!fV && !fH) break;
    }
    if (fV && fH) {
      console.log("BOTH");
    } else if (!fH && !fV) {
      console.log("NO");
    } else if (!fV) {
      console.log("HORIZONTAL");
    } else {
      console.log("VERTICAL");
     }
   }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);
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
