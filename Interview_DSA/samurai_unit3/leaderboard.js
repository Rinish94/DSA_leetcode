//***Sort method *****/
//If compareFunction(a, b) returns less than 0, leave a and b unchanged.
//If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
//If compareFunction(a, b) returns greater than 0, sort b to an index lower than a(i.e b comes first)
//compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.

function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();

  const sorting = (a, b) => {
    a[1] = Number(a[1]);
    b[1] = Number(b[1]);

    if (b[1] > a[1]) {
      return 1;
    } else if (b[1] < a[1]) {
      return -1;
    } else if (b[1] === a[1]) {
      if (b[0] < a[0]) {
        return 1;
      } else {
        return -1;
      }
    }
  };

  input = input.map((a) => a.split(" ")).sort(sorting);
  let rank = 1;
  input.forEach((a,i) => {
    if (i === 0) {
      console.log(`${rank} ${a[0]}`);
      return;
    }
    if (a[1] === input[i - 1][1]) {
      console.log(`${rank} ${a[0]}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${a[0]}`);
    }
  });
  //console.log(input);
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
