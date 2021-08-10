function runProgram(input){
  input = input.trim().split("\n")
  let n = +input[0].trim()
  let q1 =[]
  let q2 =[]
  let q3 =[]
  let q4 =[]
  let ptr = -1
  for (let i=1;i<n;i++){
      let val = input[i].trim().split(' ')
      if(val[0] === 'E'){
          if(val[i]===1){
              ptr +=1
              let obj = {}
              obj.ptr = ptr
              obj.rol = val[2]
              q1.push(obj)
          }
          else if(val[i]===2){
            ptr +=1
            let obj = {}
            obj.ptr = ptr
            obj.rol = val[2]
            q2.push(obj)
        }
        else if(val[i]===3){
            ptr +=1
            let obj = {}
            obj.ptr = ptr
            obj.rol = val[2]
            q3.push(obj)
        }
        else if(val[i]===4){
            ptr +=1
            let obj = {}
            obj.ptr = ptr
            obj.rol = val[2]
            q4.push(obj)
        }
      }
  }
  
}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`)
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

