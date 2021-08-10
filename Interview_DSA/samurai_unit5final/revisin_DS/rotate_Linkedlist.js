function runProgram(input){
   
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
     if (head === null) return null;
    if (head.next === null) return head;
    
    let dummy = head;
    let current = dummy;
    let sum = dummy;
    
    k = getRealK(sum, k);
    
   // k < head.length;
   for (let i = 0; i < k; i ++) {
     //node >= 3
     while (current.next.next !== null) {
        current = current.next;
     }
    
       let temp = current.next;
       current.next = null;
       temp.next = dummy;
       
       dummy = temp;
       current = dummy;
    }
    
    
    
    return current;
};

const getRealK = (sum, k) => {
    let length = 0;
    
    while (sum !== null) {
        length++;
        sum = sum.next;
    }
    if (length < k)
        k = k % length;
    
    return k
};


}
if(process.env.USERNAME === "Ashutosh Pandey"){
    runProgram(``)
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

