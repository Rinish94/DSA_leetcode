
// var name = "ajay"
// function prints(){
//     console.log(this.name)
// }
// var person = {
//     name:"lks",
//     cmp:"masai",
//     print: prints()
// }

// person.print() // undefined // ref error

// printName("shoneil")
// var printName

// function  printName() {
    
// }



// console.log(typeof [])

// console.log(typeof function () {}) // function




// 'use strict'

// function name() {
//     var name = "masai"
//     console.log(this.name)
// }
// function greet(){
//     console.log("hello")
// }
// var arr = [{name:"nrupul"},{name:"aman"},{name:"albert"}]

// for(var i=0; i<arr.length; i++){
//     setTimeout(name.call(arr[i]),0)
//     setTimeout(greet(),0)
// }



// (function(){
//     console.log("helllo")
// })() //hello

// const sum = (x,y) => {
//     x = x || 5
//     y = y || 10
//     return x+y
// }
// console.log(sum(0,10)) //15  - 10



// function cont(x){
//     var y = x*10
//     function val(z){
//         console.log(x,y,z)
//     }
//     val(y*5)
// }
// cont(3) //3 30 150


// name = "masai"
// var name
// console.log(name) // masai


// const prod = (x) => {
//     x = x+5
//     return inner => (
//         x * inner
//     )
// }
// console.log(prod(5)(10)) // 100

// function alpha(){
//     var x = 100
//     this.beta()
// }

// function beta(){
//     var x = 200
//     console.log(this.x)
// }

// alpha() // undefined


// const arr = [10, 20, 30, 40]
// for(var i=0; i<arr.length; i++){
//     setTimeout(function(){
//         console.log("index:" + i + "ele" + arr[i]) 
//     },3000)
// }  // index 4 elem: undefined 4 times


// console.log(typeof[1,1,1] === typeof{val:1, val:1, val:1}) // true
//

// "use strict"

// function alpha(){
//     var name = "masai"
//     console.log(this.name)
// }

// var name = "masai school"

// alpha() // undefined



// console.log(name)
// name = "masai"
// var name // undefined


// var str = "masai"
// var {length} = str //5


// foo()
// function foo(){
//     console.log("hello")
// }  // hello


// console.log([1] === [1]) // false

// for(var i=0; i<=5; i++){
//     setTimeout(function asyncronous (){
//         console.log(i)
//     }, i*1000)
// }  
// 6 is printed 6 times in one second in terval

// printName ("shonell")
// var printName = function (name){
//     console.log("hello", name)
// }  //type error printName not a function



// printName ("shonell")
// var printName

// function printName (name){
//     console.log("hello", name)
// }  

// printName = function(name){
//     console.log("hey", name)
// }
//hello shonell


// console.log(name)
// name = "masai"  // referror
// var name = "masai"  // undefined


// name = x || "name"
// console.log(name)
// var x = "mmasai"  // name



// var arr = new Array(5).fill(0).map(function(a,b){return b+1}) // [1,2,3,4,5]


// function getName(){
//     var status = true
//     if(status) {
//         // const name = "masai" // ref erro
//         var name = "masai" // masai
//     }
//     console.log(name)
// }
// getName() 

// const isAuth
// console.log(isAuth)



// function getYear(){
//     var year = new Date().getFullYear()
//     return year
// }
// getYear()
// console.log(year) // Ref error

// const arr = ["a", "b", "c"]
// arr[0] = "d"
// console.log(arr)

