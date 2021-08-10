function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  for (let i = 0, j = 1; i < test; i++) {
    let arr1 = input[j++].trim().split("").sort().join("");
    let arr2 = input[j++].trim().split("").sort().join("");
    //    console.log(arr1)
    //    console.log(arr2)
    if (arr1 == arr2) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
