//You are in Koramangala and want to go to BTM 2nd Stage, but roads are blocked. Instead there are n trampolines kept on the route. These trampoline are different in a way that you don't just jump on it, but it takes you forward as well. There is a number written on all the trampolines that indicates the maximum number of trampoline you can jump from there.

//NOTE: The last trampoline is in BTM 2nd stage (where you want to reach)

//For instance, assume there are 6 trampolines with numbers 1,3,6,1,0,9 written on it. So, from first trampoline you can jump at most 1 trampoline and move to second trampoline with number 3, from which you can take a jump of at max 3 trampolines, that is, you can go to 3rd, 4th or the 5th trampoline..so on..

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  // console.log(n,m,arr)
  let res = coinChange(arr, m, n);
  console.log(res);
}
function coinChange(arr, m, n) {
  let table = Array(n + 1).fill(0);

  table[0] = 1;
  //    console.log(table)
  for (let i = 0; i < m; i++) {
    // console.log(arr[i])
    for (let j = arr[i]; j <= n; j++) {
      // console.log(table[j])
      // console.log(table[j - arr[i]])
      console.log(arr[i], j);
      table[j] += table[j - arr[i]];
    }
  }
  return table[n];
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 3
  1 2 3`);
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
