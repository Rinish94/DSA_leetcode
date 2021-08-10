function runProgram(input){
    
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`1
    13
    1 3 3 2 2 3 6 6 5 5 6 6 3
    `)
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

