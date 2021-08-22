'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function makeInputVerifier(minimum, maximum) {
//   console.log(maximum)
  return verify
function verify(inputValue){
    if(inputValue<minimum){
        return 'Input is less than minimum value';
    }
    else if((inputValue>=minimum) && inputValue<=maximum){
        return 'Input is in range'
        
    }
    else {
        return 'Input is more than maximum value'
    }
}
}
