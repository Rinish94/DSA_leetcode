function runProgram(input){
    input = input.trim().split('\n')

}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`)
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

