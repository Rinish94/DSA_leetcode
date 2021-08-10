//Given two integers A and B, we need to figure out whether we can go from A to B using the following operations -

//-> We can multiply A by 2 (like 6 -> 12).

//-> We can append 1 at the end of A (like 6 -> 61).
// find is it possible ot make 2nd element by multiplying first element.

// find is it possible ot make 2nd element by multiplying first element.
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1; i < test; i++){
        let [a,b] = input[j++].trim().split(" ").map(Number)
        // console.log(a,b)
        if(findPossibility(a,b)){
            console.log("Possible")
        }
        else{
            console.log("Not Possible")
        }
        function findPossibility(a,b){
            if(a == b){
                return true
            }
            else if(a > b){
                return false
            }
             return findPossibility(a*2,b) || findPossibility(a*10+1,b)
        }
    }
}

if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`)
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