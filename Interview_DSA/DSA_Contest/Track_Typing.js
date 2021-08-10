function runProgram(input) {
  input = input.trim().split("\n");
  let characters = input[0].trim();
  let str = input[1].trim();

  let res = speedType(characters, str);
  console.log(res);
}
function speedType(characters, str) {
  const map = new Map();
  for (let i = 0; i < characters.length; i++) {
    map.set(characters.charAt(i), i);
  }

  let curr = characters.charAt(0);
  let counter = 0;
  for (let char of str) {
    counter += Math.abs(map.get(curr) - map.get(char));
    curr = char;
  }
  return counter;
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`pqrstuvwxyzabcdefghijklmno
    hello`);
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
