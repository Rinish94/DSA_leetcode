// console.log(undefined == null)  // true
// console.log(undefined === null)     //false
// console.log(NaN == NaN)         // false
// console.log([] == [])           // false
// console.log({1:'name'} === {1:'name'}) // false

// arithmetic operators
// conditional operators in react { data && data.item && data.item.map }
// 5 && 2 && 0 || 2 && 3 || 15 && 21
// 5 && 2 && 0 || 2 == 3 || 15 && 21
// 5 && 2 && 0 || 2 == 3
// precedence

// map, forEach, filter, reduce


// var arr = [1,2,3,4]

// newArr = arr.filter((a,i)=>a>2)

// var arr = new Array(1,2,3)
// console.log(arr)
// index value
// console.log(typeof arr === typeof {})

// 2d arrays, mxn

// transpose of an array. MxN -> NxM

// var key = '1'
// var key2 = '2'

// var obj = {
//   1: 'value',
//   2: 'value2'
// }

// obj[key]


// for(let key in obj){
//   console.log(key, obj[key])
// }

// hoisting
// var x = 100

// function test(){
// //   right to left
//   console.log('value',x)
// //   100, 10
//   var i = 10,
//           x = i

// }
// test()
// console.log(x)

// 100,undefined
// Ref

// var, let, const


// redeclaration let x = 10   ... let x = 20
// let x = 100
// let x =20


// const name = [1,2,3]

// name[1] = 4
// console.log(name)

// var arr = [1,2,3,4,5]

// for(var i=0; i<arr.length; i++){
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// console.log('value of i after for loop',i)

// expected
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

// value is 
// undefined 5 -> 5 times -> 1 sec intervals

// IIFE

// for(var i=0; i<arr.length; i++){
//   setTimeout(function(i){
//        return function(){
//       console.log(arr[i],i)
//     } 
//   }(i),i*1000)
// }

// function display(i){
//   setTimeout(()=>console.log(this[i],i),i*1000)
// }


// for(var i=0; i<arr.length; i++){
//   display.call(arr,i)
// }


// for(let i=0; i<arr.length; i++){
//     //   locally scoped
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// // closures, scopes, eventloop, call,apply,bind/functions

// Extra questions on closures:

// write function for sum(5)(10)(2)

// What is debouncing? Write a function to explain debouncing? 

// // DE-BOUNCING: EXTRA

// // minimise the no api requsest
// // 

// const debounce = (func, delay) => {
//     // if the request or call is not interrupted for delay milliseconds
//     // then the function should be fired
//     let debouncing
//     return function(){
//         clearTimeout(debouncing)
//         debouncing = setTimeout(()=>func.apply(this,arguments), delay )
//     }
// }


// 'use strict'

// function test(){
//     console.log(this)
// }

// test()


// 'key,value,pair,javascript'
// {key:{value:{pair:{javascript:{}}}}}

// for loop

// var str = 'key,value,pair,javascript'

// var arr = str.split(',')

// var obj = {}
// obj[arr[arr.length-1]] = {}
// for(var i=arr.length-2;i>=0; i--){
//     obj[arr[i]] = {...obj}

//     delete obj[arr[i+1]]
// }

// console.log(obj)

// 'key,value,pair,javascript'
// {key:{value:{pair:{javascript:{}}}}}

// // for loop

// var str = 'key,value,pair,javascript'

// var arr = str.split(',')

// var rec = (arr,i=0,obj={}) => {
//   if(i===arr.length){
//     return obj
//   }
//   else{
//       obj[arr[i]] = rec( arr, i+1 )
//       return obj
//   }
// }

// // recursion
// var str = 'key,value,pair,javascript'

// var arr = str.split(',')

// var obj = {}

// // recursion

// var rec =( arr , i=0 , obj={}) => !arr[i] ? obj : { [arr[i]]: rec(arr,i+1) } 

// console.log( rec(arr) )


// to get unique value of array

// let arr = [1, 2, 4, 4, 3]
// console.log([...new Set(arr)]); 

// convert number to some falsy value
// console.log(+null); // 0
// console.log(+false); // 0
// console.log(+""); // 0
// console.log(+NaN); // NaN
// console.log(+undefined);// NaN


// convert arrayt to object
// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObject = {...fruits};
// console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

// dir method display json object as normal obect
// const user = { "name":"John", "id": 1, "city": "Delhi"};
// console.dir(user);

// console.log(1 > 2 < 3);
// console.log(3 > 2 < 2);

// console.log(NaN == NaN) // false

// let a = ""
// console.log(!!a) false


// console.log(("b"+"a"+ +"a"+"a").toLowerCase())  // banana


// console.log(-"10")