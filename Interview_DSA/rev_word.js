// function reverseWords(str) {
//   var rev = [],
//     wordLen = 0;
//   for (var i = str.length - 1; i >= 0; i--) {
//     if (str[i] == " " || i == 0) {
//       rev.push(str.substr(i, wordLen + 1));
//       wordLen = 0;
//     } else wordLen++;
//   }
//   return rev.join(" ");
// }

// console.log(reverseWords("masai champion boy"));


///reverse in place//

// function reverseInPlace(str){
//     return str.split(' ').reverse().join(' ').split('').reverse().join('');
//   }
  
//  console.log(reverseInPlace('I am the good boy'));



 ///reverse

 function reverse(str,start,end)
    {
        // Temporary variable
        // to store character
        let temp;
         
         
        while (start <= end)
        {
            // Swapping the first
            // and last character
            temp = str[start];
            str[start]=str[end];
            str[end]=temp;
            start++;
            end--;
        }
    }
    // Function to reverse words
    function reverseWords(s)
    {
        // Reversing individual words as
        // explained in the first step
        s=s.split("");
        let start = 0;
        for (let end = 0; end < s.length; end++)
        {
            // If we see a space, we
            // reverse the previous
            // word (word between
            // the indexes start and end-1
            // i.e., s[start..end-1]
            if (s[end] == ' ')
            {
                reverse(s, start, end);
                start = end + 1;
            }
        }
        // Reverse the last word
        reverse(s, start, s.length - 1);
         
        // Reverse the entire String
        reverse(s, 0, s.length - 1);
        return s.join("");
    }

    console.log(reverseWords("i like this program very much"))