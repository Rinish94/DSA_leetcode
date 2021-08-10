function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let val = arr[0];
  let obj1 = {};
  let obj2 = {};
//   console.log(arr,n)
  for (let i = 0; i < n; i++) {
    if (val != arr[i]) {
      obj2[arr[i]] = true; //track
    }
    // console.log(obj1,obj2)
    if (arr[i]%2 === 1 && obj2[arr[i]] == undefined) {
        // console.log(obj1)
      if (obj1[arr[i]] === undefined) {
        obj1[arr[i]] = 1;
      } else {
        obj1[arr[i]] += 1;
      }
    }
    val = arr[i];
  }
  let max = 0;
//   console.log(obj1)
  for ( key in obj1) {
    if (obj1[key] > max) {
      max = obj1[key];
    }
  }
  console.log(max);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`12
    1 1 1 1 2 2 2 2 2 1 1 1`);
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
