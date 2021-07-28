function runProgram(input){
   input = input.trim().split('\n')
   let test = +input[0].trim()
   let len =1
   for (let i=0;i<test;i++){
       let current = input[len++].trim().split('.').map(Number)
       let updated = input[len++].trim().split('.').map(Number)
    //    console.log(current)
    //    console.log(updated)
    let flag = true
    for (let j=0;j<current.length;j++){
        if(current[j] > updated[j]){
                flag = false
                break
        }
        else if (current[j] < updated[j]){
            flag = true
            break
        }
    }
    if(flag){
        console.log("True")
    }
    else{
        console.log("False")
    }
   }
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`)
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

