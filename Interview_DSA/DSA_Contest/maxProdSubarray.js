function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (let i = 0; i < test; i++) {
    let num = +input[line++].trim().split(" ");
    let arr = input[line++].trim().split(" ").map(Number);

    let res = pdtSubArray(arr, num);
    console.log(res);
  }
}
function pdtSubArray(arr,n)
    {
        
        let minVal = arr[0];
        let maxVal = arr[0];
       
        let maxProduct = arr[0];
       
        for (let i = 1; i < n; i++)
        {
       
         
            if (arr[i] < 0)
            {
                let temp = maxVal;
                maxVal = minVal;
                minVal =temp;
               
            }
       
         
            maxVal = Math.max(arr[i], maxVal * arr[i]);
            minVal = Math.min(arr[i], minVal * arr[i]);
       
            
            maxProduct = Math.max(maxProduct, maxVal);
        }
       
        
        return maxProduct;
    }
// function pdtSubArray(arr, num) {
//   let ans = arr[0];

//   for (let m = 0; m < num; m++) {
//     let val = arr[m];

//     for (let n = m + 1; n < num; n++) {
//       ans = Math.max(ans, val);
//       val *= arr[n];
//     }

//     ans = Math.max(ans, val);
//   }
//   return ans;
// }
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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
