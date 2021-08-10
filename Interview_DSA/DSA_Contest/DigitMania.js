function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;

  for (let i = 0; i < test; i++) {
    let [m, n] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ");
    let ans = "";
    let add = 0;
    let count = 0;
    let arr2 = [];
    for (let j = 0; j < arr.length; j++) {
      let k = 0;
      let c = 0;
      let sum = 0;
      let str = arr[j];

      while (k < str.length) {
        if (Number(str[k]) === n) {
          c++;
        }
        sum = sum + Number(str[k]);
        k++;
      }
      let obj = {};
      obj.count = c;
      obj.length = str.length;
      arr2.push(obj);
      //  console.log(arr2)

      if (c === count && c !== 0) {
        if (sum > add) {
          ans = str;
          add = sum;
          count = c;
        }
      } else if (c > count) {
        ans = str;
        add = sum;
        count = c;
      } else if (count === 0 && c !== 0) {
        c = count;
        add = sum;
        ans = str;
      }
    }
    let max = 0;
    for (let m = 0; m < arr2.length; m++) {

      if (arr2[m].count > max) {
        max = arr2[m].count;
      }
    }
    if (ans.length !== 0) {
      console.log(ans);
    } else {
      console.log(-1);
    }
  }
}

if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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
