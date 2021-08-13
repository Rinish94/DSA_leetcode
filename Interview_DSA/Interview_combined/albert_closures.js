//closures
//what are closures
//why do we need closures?
// what is currying?
//applications

//closures: is a mechanism in which javascript maintains a scope of some variables in closures scope,if the particular variable goes out of the scope.
// functions
// Javascript is 2 pass engine,lexical scope.It matters more on where your functiions are declared
//author time

//eg:1=>
// function outer(a){
//     // var a =10 // value a is kept in a closure scope
//     return function inner(b){
//         return a+b
//     }
// }

// // var fn = outer()

// // console.log(fn(5))
// console.log(outer(5)(10))//pass around function//higher around function// invoke first then passing refrence

//eg:2 =>
// function calculator(initVal=0){
//     var val = initVal

//     function add(value){
//         val = val + value
//         return val
//     }

//     return {add}
// }

// var cals=calculator()

// console.log(cals.add(10))
// console.log(cals.add(23))

//memoization
//debouncing
//throttling

//eg:3 =>

var arr = [1, 2, 3];

// for(var i=0;i<arr.length;i++){
//     //asynchronous function
//     setTimeout(function(){
//         console.log(arr[i],i)
//     },i*1000)
// }
// //to fix this go down=>

//since var is a global variable

// settimeout is an asynchronous function, which
// means it will invoke this callback at alater point of time once it is resolved
// wrong output=>
//undefined 3
// undefined 3
// undefined 3

for (let i = 0; i < arr.length; i++) {
  // put let instead of var
  //asynchronous function
  setTimeout(function () {
    //kind of closures but is stored in block scope
    console.log(arr[i], i);
  }, i * 1000);
}
//// correct output=>
// 1 0
// 2 1
// 3 2

//closures will applied only with functions
