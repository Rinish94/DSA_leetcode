function runProgram(input) {
  input = input.trim().split("\n");
  let test = input[0].trim();
  for (let i = 0, j = 1; i < test; i++) {
    let n = input[j++].trim();
    let arr = input[j++].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => b - a);
    let max = arr[0];
    let high = arr[arr.length - 1];
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == -high) {
        flag = true;
        break;
      }
      else if(arr[i] == 0){
        return
      }
    }
      // console.log(arr)
    let arr1 = [];
    let arr2 = [];
    // let max =[]
    for (let i = 1; i < n; i++) {
      // console.log(arr[i])
      // if(arr[i] < 0){
      //     arr1.push(arr[i])
      //     max = arr1[i]
      // }
      // else {
      //     arr2.push(arr[i])
      // }

      if (arr[i] == -max) {
        max = arr[i];
        //   console.log(arr[i])
      }
      // if (arr[i] >= max && arr.join("").indexOf(-arr[i]) != -1) {
      //   max = arr[i];
      //   // console.log(max, arr[i])
      // }
      //   console.log(-max)
    }

    if (max != 0) {
      console.log(max);
    } else {
      console.log(-1);
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  9
  -10 -6 4 9 1 5 -1 -4 7
  10
  1 -6 6 -4 3 5 2 4 -2 2
  9
  4 3 -6 -4 -8 8 7 -1 2
  2
  8 -6
  8
  -7 -3 5 7 -1 3 1 -5
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
