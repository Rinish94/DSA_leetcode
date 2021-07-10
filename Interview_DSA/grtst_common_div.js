// function greatestCommonDivisor(a, b){
//     var divisor = 2, 
//         greatestDivisor = 1;
  
//     //if u pass a -ve number this will not work. fix it dude!!
//     if (a < 2 || b < 2)
//        return 1;
    
//     while(a >= divisor && b >= divisor){
//      if(a %divisor == 0 && b% divisor ==0){
//         greatestDivisor = divisor;      
//       }
//      divisor++;
//     }
//     return greatestDivisor;
//   }
  
//   console.log(greatestCommonDivisor(14, 21))
  function gcd(a, b)
{
    // Everything divides 0
    if (a == 0)
    return b;
    if (b == 0)
    return a;
 
    // base case
    if (a == b)
        return a;
 
    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
console.log(gcd(98, 56))