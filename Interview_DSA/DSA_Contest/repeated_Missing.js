function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1;i<test;i++){
        let n = +input[j++].trim()
        let arr = input[j++].trim().split(" ")
        // console.log(arr)
        let obj = {}
        for(let k=1; k<=n; k++){
            obj[k] = 0
        }
        for(val of arr){
            // console.log(val)
            obj[val]  = ++obj[val]
        }
       
        // console.log(obj)
        let missing = ""
        let repeat = ""
        for (key in obj){
            if(obj[key] == 0){
                missing = key
            } 
            if(obj[key] == 2){
                repeat = key
            }
        }
        console.log(missing + " "+ repeat)
    }
}

if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`)
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