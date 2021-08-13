function isPrime(n) {
  let div = 2;
let flag = false
  while (n > div) {
    if (n % div == 0) {
     flag = false;
    } else{
        flag = true;
    }
    return flag
  }

}
console.log(isPrime(4));

