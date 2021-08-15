function priority(type) {
    switch(type){
        case('^'):
            return 3;
        case('+'):
            return 1;
        case('-'):
            return 1;
        case('/'):
            return 2;
        case('*'):
            return 2;
    }
}
function runProgram(input){
    input = input.trim().split("");
    let stack = [];
    let result = "";
    for(let i = 0; i < input.length; i++) {
        if((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z')){
            result += input[i];
        } else if(input[i] == '(') {
            stack.push('(')
        }
        else {
            if(input[i] == ')') {
                while(stack.length !== 0 && stack[stack.length - 1] != '(') {
                    let temp = stack[stack.length - 1];
                    result += temp;
                    stack.pop();
                }
                 if(stack[stack.length - 1] == '(')  stack.pop();
            }
            else{
                while(stack.length !== 0 && priority(input[i]) <= priority(stack[stack.length - 1])) {
                    let temp = stack[stack.length - 1];
                    result += temp;
                    stack.pop();
                }
                stack.push(input[i]);
            }
        }
    }	
    while(stack.length !== 0) {
        let temp = stack[stack.length - 1];
        result += temp;
        stack.pop();
    }
    console.log(result);
}
// TC = O(N^2) 
//SC = O(M) M is no of operation in string

if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`)
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