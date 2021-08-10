function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let width = input[1].trim().split(" ").map(Number);

  let res = maxLevel(width, n);
  console.log(res);
}
function maxLevel(width, n) {
  width.sort();

  let ans = 1;
  let prev_width = width[0];
  let prev_count = 1;
  let curr_count = 0;

  let curr_width = 0;
  for (let i = 0; i <= n; i++) {
    curr_width += width[i];
    curr_count += 1;

    if (curr_width > prev_width && curr_count > prev_count) {
      prev_width = curr_width;
      prev_count = curr_count;

      curr_count = 0;
      curr_width = 0;

      ans++;
    }
  }

  return ans;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
    40 100 20 30
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
