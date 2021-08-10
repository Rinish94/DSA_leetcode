function runProgram(input){
    // Write code here
    input = input.trim().split(' ').map(Number)
    console.log(input)
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`3,3,1`)
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


