function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    let key = +input[2].trim()
    let res = findPos(arr, key)
    console.log(res)
  }
  function binarySearch(arr, l, r, x)
{
    if (r>=l)
    {
        let mid = l + Math.floor((r - l)/2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
        return binarySearch(arr, mid+1, r, x);
    }
    return -1;
}
function findPos(arr, key)
{
    let l = 0, h = 1;
    let val = arr[0];
 
    // Find h to do binary search
    while (val < key)
    {
        l = h;     // store previous high
        h = 2*h;     // double high index
        val = arr[h]; // update new val
    }
 
    // at this point we have updated low and
    // high indices, Thus use binary search
    // between them
    return binarySearch(arr, l, h, key);
}
  if (process.env.USERNAME === "Ashutosh Pandey") {
    runProgram(`5
    1 2 3 5 6
    3`);
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
  