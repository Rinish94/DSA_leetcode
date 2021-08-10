///You have N friends whom you want to take to your birthday party. You know the amount you will
//have to spend on each of your friend. You have R amount of money with you. You will take any K
//out of N friends to party such that the sum of total expenses on those K friends is exactly equal to R rupees. Else in any other condition you won't take anyone to party.
//You have to find if it is possible to take them on party or not.
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, r] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  let sum = 0;
  let flag = false;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    console.log(sum);
    if (sum <= r) {
      flag = true;
      break;
    }
  }
  if (flag) {
    console.log("Party");
  } else {
    console.log("No Party");
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`10 80
    43 59 25 35 30 51 52 32 36 10`);
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
