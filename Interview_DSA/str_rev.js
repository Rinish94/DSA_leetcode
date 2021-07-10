// function rvstr(str) {
//   let retStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     retStr += str[i];
//   }
//   return retStr;
// }

// console.log(rvstr("you are a masai champion"));

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse("you are a masai champion"));