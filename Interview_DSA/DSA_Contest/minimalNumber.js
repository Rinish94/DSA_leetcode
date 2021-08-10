function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for (let i=0, j=1; i<test; i++){
        let n = +input[j++].trim()
        let arr = input[j++].trim().split(" ").sort((a,b) => a-b)
        if(arr[0] !== "0"){
            console.log(arr.join("").trim())
        }
        else {
            for (let j=0; j<n; j++){    
                if(arr[j] !== "0"){
                    let temp = arr[j]
                    let next = arr.splice(j+1, arr.length)
                    let zeros = arr.slice(0, j)
                    let res = [temp,...zeros, ...next]
                    console.log(res.join("").trim())
                    break;
                }
            }
        }
    }   
}

if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`3
    4
    2 1 0 0
    4
    1 4 2 3
    4
    5 2 3 2`)
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