function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  let arr = [];
  for (let m = 0; m < test; m++) {
    let [cases, k] = input[line++].trim().split(" ").map(Number); //1=>2
    arr = input[line++]
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number); //2
    //console.log(arr);
    let i = 0;
    let j = arr.length - 1;
    let count = false;
    while (i < j) {
      if (arr[i] + arr[j] === k) {
        count = true;

        break;
      } else if (arr[i] + arr[j] < k) {
        i++;
      } else if (arr[i] + arr[j] > k) {
        j--;
      }
    }
    // console.log(count)
    if (count === true) {
      console.log("1");
    } else {
      console.log("-1");
    }
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`1
    5 5         
    3 6 1 2 7          
   `);
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

// When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.

// The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:

// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.
// When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.
