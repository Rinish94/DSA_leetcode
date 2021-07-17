function nonRepeatChar(str){
    var len = str.length,
    char, 
    charCount = {};
for(var i =0; i<len; i++){
  char = str[i];
  if(charCount[char]){
    charCount[char]++;
  }
  else
    charCount[char] = 1;
}
for (var j in charCount){
  if (charCount[j]==1)
     return j;
}

}

console.log(nonRepeatChar("the quick brown fox jumps then quickly blow air"))

function removeDuplicateChar(str){
    var len = str.length,
        char, 
        charCount = {}, 
        newStr = [];
    for(var i =0; i<len; i++){
      char = str[i];
      if(charCount[char]){
        charCount[char]++;
      }
      else
        charCount[char] = 1;
    }
    for (var j in charCount){
      if (charCount[j]==1)
         newStr.push(j);
    }
    return newStr.join('');
  }
  
  console.log( removeDuplicateChar('Learn more javascript dude'))