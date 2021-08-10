function runProgram(input) {
    // Write code here
       input = input.trim().split('\n')
       let len = +input[0]
       let arr= []
       for (let i = 1;i<=len;i++){
           let data = input[i].split(' ')
           //console.log(data)
           let res = data[0]
            let num = data[1]
            //console.log(num)
            arr.push({res,num})
            arr.sort(sortData)
       } 
       console.log(arr[0].res)

}

  function sortData(a,b){
      return b.num - a.num
  }
//Boiler plate code for VS CODE
if (process.env.USERNAME === "Ashutosh Pandey") {
    runProgram(`4
ankit 10
amit 40
shivam 25
shubham 33`)
}
//console.log(process.env)
//Boiler plate code for OJ
else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });
}