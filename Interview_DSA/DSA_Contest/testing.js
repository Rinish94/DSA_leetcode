function LetterCountI(str) { 

    var newStr = str.toLowerCase();
  
    var arr = newStr.split(" ");
  
    var count = 0;
    var word = "-1";
  
    for (var i = 0; i < arr.length; i++) {
     for (var a = 0; a < arr[i].length; a++) {
       var countNew = 0;
       for (var b = a + 1; b < arr[i].length; b++) {
         if(arr[i][a] === arr[i][b])
            countNew += 1;
       }
       if (countNew > count) {
         count = countNew;
         word = arr[i];
       }
     }
     console.log(word)
    }
  
  
  }

  LetterCountI()