function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ");
  let dep = input[2].trim().split(" ");

  let res = findPlatform(arr, dep, n);
  console.log(res);
}
function findPlatform(arr, dep, n) {
  let platform = 1,
      result = 1;

  for (let i = 0; i < n; i++) {
    platform = 1;

    for (let j = i + 1; j < n; j++) {
      if (
        (arr[i] >= arr[j] && arr[i] <= dep[j]) ||
        (arr[j] >= arr[i] && arr[j] <= dep[i])
      )
        platform++;
    }
    // result = output(result, platform);
}
return platform;

}
// function output(result, platform) {
//   if (result === platform) return result;
//   else {
//     if (result > platform) return result;
//     else return platform;
//   }
// }
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    9:00 9:40 9:50 11:00 15:00 18:00
    9:10 12:00 11:20 11:30 19:00 20:00`);
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
