function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0];
  let str = input[1].trim();
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    obj[char] = obj[char] === undefined ? 1 : ++obj[char];
  }
   Object.keys(obj).sort().forEach(function(e){
    console.log(e + "-" + obj[e]);
  })

}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4
      aman`);
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
