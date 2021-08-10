function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
    Print3Smallest( arr,  n)
}

function Print3Smallest( array,  n)
{
    let firstmin = Number.MIN_VALUE, secmin = Number.MIN_VALUE, thirdmin = Number.MIN_VALUE;
    for (let i = 0; i < n; i++)
    {
        /* Check if current element is less than
           firstmin, then update first, second and
           third */
        if (array[i] < firstmin)
        {
            thirdmin = secmin;
            secmin = firstmin;
            firstmin = array[i];
        }
 
        /* Check if current element is less than
        secmin then update second and third */
        else if (array[i] < secmin)
        {
            thirdmin = secmin;
            secmin = array[i];
        }
 
        /* Check if current element is less than
        then update third */
        else if (array[i] < thirdmin)
            thirdmin = array[i];
    }
 
    console.log("First min = " + firstmin + "</br>");
    console.log("Second min = " + secmin + "</br>");
    console.log("Third min = " + thirdmin + "</br>");
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`8
    1 2 3 4 2 1 6 5`);
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
