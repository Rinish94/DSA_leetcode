function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  input.shift();
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr[i] = input[i].trim().split(" ");
  }
  let line = 1;
  let temp;

  for (let i = 0; i < arr.length-1; i++) {
      for (let j = 0; j < arr.length-i-1; j++) {
          if (arr[j] < arr[j + 1]) {
              temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
