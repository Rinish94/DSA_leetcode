function runProgram(input) {
  input = input.trim().split("\n");
  let len = +input[0].trim();
  let goal = {};
  let team = [];
  for (let i = 0; i <= len; i++) {
    let key = input[i].trim();
    if (key in goal) {
      goal[key]++;
    } else {
      goal[key] = 1;
      team.push(key);
    }
  }
 // console.log(team)
  //console.log(goal[team[0]])
  if (team.length > 1) {
    console.log(goal[team[0]] > goal[team[1]] ? team[0] : team[1]);
  } else {
    console.log(team[0]);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    A
    ABA
    ABA
    A
    A`);
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
