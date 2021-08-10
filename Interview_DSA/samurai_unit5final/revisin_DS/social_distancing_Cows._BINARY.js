function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let arr = [];

  for (let i = 0; i < test; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    for (let j = 0; j < n; j++) {
      //   let arr = input[line++].trim().split(" ").sort((a,b) => a-b).map(Number);
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    let array = arr.sort((a, b) => a - b);
    // console.log(array)
    let low = 0;
    let high = array[n - 1] - array[0];
    let ans = 0;

    while (high >= low) {
      let mid =Math.floor((high + low) / 2);
      //console.log(mid)
      if (check(mid)) {
        low = mid + 1;
        ans = mid;
      } else {
        high = mid - 1;
      }
    }
    console.log(ans+1)
    function check(dist) {
      let emp = 0;
      let prev_seat = array[0];
      let n = array.length;

      for (let i = 1; i < n; i++) {
        if (array[i] - prev_seat >= dist) {
          emp = emp += 1;
          prev_seat = array[i];
        }
      }
      if (emp >= m) {
        return true;
      } else {
        return false;
      }
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    5 3
    1
    2
    8
    4
    9`);
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
