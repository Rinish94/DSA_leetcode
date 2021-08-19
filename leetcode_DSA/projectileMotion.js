function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[0].trim().split(" ").map(Number);
  //   console.log(arr)
  let a = arr[0];
  let b = arr[1];
  let c = arr[2];
  let l = arr[3];
  let r = arr[4];

  let val = 0;
  let prod = [];
  let value = 1;
  for (let i = l; i <= r; i++) {
    val = a * i ** 2 + b * i + c;
    // console.log(val);
    prod.push(val);
  }
  //   console.log(prod);
  for (let j = 0; j < prod.length; j += 1) {
    //   console.log(prod[j])
    value *= prod[j];
  }
  console.log(value);
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`-1 3 8 -2 2`)
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
}