// in html create a button with id = click
//----------Debounce---------------------------
// delay the response..
// sometime doesnt gurantee api call if we stopped scrolling

// const makeApiCall = () => {
//     console.log("api call in progress")
//   }
//   let c=0
//   const debouncer = (func, delay) => {
//     // should remember if the call is called
//     let debouncing;
//     return function (){
//       console.log(c++)
//       debouncing && clearTimeout(debouncing)
//       debouncing = setTimeout(()=> func.apply(this.arguments), delay)
//     }
//   }
  
//   window.addEventListener('load', function(){
//     var btn = document.getElementById("click")
//     btn.addEventListener("click", debouncer(makeApiCall, 1000))
//   })

// -----------------Throttling--------------
// gurantees the callback at every n sec

// const makeApiCall = () => {
//     console.log("api call in progress")
//   }
//   let c = 0
//   function throttle(fn, wait){
//       let lastCall = 0
//       return function(){
//           // present time , last call time was made
//           console.log(c++, Date.now() - lastCall)
//         if(Date.now() - lastCall > wait){
//             lastCall = Date.now()
//             fn.apply(this, arguments)
//         }
//       }
//   }
  
//   window.addEventListener('load', function(){
//     var btn = document.getElementById("click")
//     btn.addEventListener("click", throttle(makeApiCall, 1000))
//   })

//---------------Toggler----------------

// function toggler () {
//     var arr = arguments
//     var index = -1
//     return function (){
//         index = index + 1
//         if(index >= arr.length){
//             index = 0
//         }
//         return arr[index]
//     }
// }

// // const toggle = toggler(1,2,3)
// const toggle = toggler("On", "Off")

// console.log(toggle())
// console.log(toggle())
// console.log(toggle())
// console.log(toggle())
// console.log(toggle())


//

// var arr = [1,2,3]

// for(var i=0; i<arr.length; i++){
//     setTimeout (function (){  // asynchronous code
//         console.log(i, arr[i])  // so i became 3 when it executes and value of arr[3] is undefined
//     },i*1000)
// }  
// if in for loop we use "var"
// 3 undefined      0 sec
// 3 undefined      1 sec
// 3 undefined      2 sec

// if in for loop we use "let"
// 0 1      0 sec
// 1 2      1 sec
// 2 3      2 sec


//--------------- other  method------------
// function display (i){
//     setTimeout (function (){  
//         console.log(i, arr[i])  
//     },i*1000) 
// }
// for (var i=0; i<arr.length; i++){
//     display(i)
// }
// this will give the req output because here in function closure applies
// 0 1      0 sec
// 1 2      1 sec
// 2 3      2 sec

//------------if we pass the reference of array-------------
// function display (i){ 
//     // this refers to context of array i.e. [1,2,3]
//     console.log(this)
//     setTimeout (function (){  
//         console.log(i, this[i])  // here this refer to window object instead of array
//     },i*1000) 
// }
// for (var i=0; i<arr.length; i++){
//     display.call(arr,i) //pass the ref or context of array
// }

// 0 undefined
// 1 undefined
// 2 undefined

// to fix upper problem---------------

// function display (i){ 
//     // or we do "var that = this; "
//     // and use "that" in inside settimeout function console
//     setTimeout (function (){   // or we can use arrow function
//         console.log(i, this[i])
//     }.bind(this),i*1000) // we can bind "this"
// }
// for (var i=0; i<arr.length; i++){
//     display.call(arr,i) 
// }