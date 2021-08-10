function runProgram(input){
   input = input.trim().split('\n')
   let ana = input[0].trim().replace(/\s+/g, "").split('').sort().join()
   let ram = input[1].trim().replace(/\s+/g, "").split('').sort().join()
  
   if(ana === ram){
       console.log("True")
   }
   else{
       console.log("False")
   }



}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`anagram
    nag a ram`)
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