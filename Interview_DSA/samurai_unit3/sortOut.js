function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let num = +input.shift();
  let item = input[0].trim().split(" ").map(Number);
  console.log(item)
  let count = item.map(Number);
  // console.log(count)
  let sort = (arr) => {
    let size = arr.length;
    // console.log(arr)
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    // console.log(arr)
  };
  sort(count)
  // console.log(count)
  let res = "";
  for (let m = 0; m < item.length; m++) {
    for (let n = 0; n < item.length; n++) {
      // console.log(n);
      if (count[m] === item[n]) {
        // console.log(count[m]+"  "+item[n])
        // console.log(n)
        res += m - n + " ";
      }
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    4 5 3 7 1`);
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
