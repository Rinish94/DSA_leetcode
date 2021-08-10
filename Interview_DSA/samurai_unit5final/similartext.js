function runProgram(input){
    let str = input.trim().split("\n");
    let arr1 = str[0].trim();
    let arr2 = str[1].trim();
    let obj ={}
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        let el = arr2[i];
        obj[el] = obj[el] == undefined ? 1 : ++obj[el];//agar value not exist put 1 
      }
      console.log(obj)
      for (val of arr1) {
        if (obj[val] !== undefined) {
          count++;
        }
      }
      console.log(count);
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`AEDFHR
    ABCDGH`)
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

