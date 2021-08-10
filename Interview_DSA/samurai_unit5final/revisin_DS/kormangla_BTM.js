//You are in Koramangala and want to go to BTM 2nd Stage,
// but roads are blocked. Instead there are n trampolines kept
//on the route. These trampoline are different in a way that you
//don't just jump on it, but it takes you forward as well. There is a number written on all the trampolines that indicates the maximum number of trampoline you can jump from there.

//NOTE: The last trampoline is in BTM 2nd stage (where you want to reach)

//For instance, assume there are 6 trampolines with numbers 1,3,6,1,0,9 written on it. So, from first trampoline you can jump at most 1 trampoline and move to second trampoline with number 3, from which you can take a jump of at max 3 trampolines, that is, you can go to 3rd, 4th or the 5th trampoline..so on..

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim().split(" ");
  let arr = input[1].trim().split(" ").map(Number);
  let res=tempolineStep(arr, n);
  console.log(res)
}
function chotu(a, b) {
    return a < b ? a : b;
  }
function tempolineStep(arr, n) {
  let table = Array(n).fill(100000);
  table[0] = 0;
  for (let i = 0; i < n; i++) {
    let range = arr[i] + 1;
    for (let j = i+1; j < chotu(range + 1, n); j++) {
      table[j] = chotu(table[j], 1 + table[i]);
    }
  }
  return table[n-1]
}


if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
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
