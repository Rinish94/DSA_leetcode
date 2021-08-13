// // promises
// // what
// // why
// // how

// // 3 states
// // fulfilled, rejected, pending
// // sleep(2000)
// // .then(operation1)
// // .then(operation2)
// // .then(operation3)
// // .catch(operation3)
// // .finally(operation3)


//------------------Basic Sleep function------------

// function sleep(time){
//     return new Promise((res,rej)=>{
//         if(typeof time !== 'number'){
//             rej('argument to sleep function should be a number')
//             return
//         }
//         setTimeout(() => {
//             res()
//         }, time);
//     })
// }
// sleep(1000)
// .then(res=>console.log('printed after 2s'))
// .catch(err=>console.log(err))
 //--------------other code----------

// function sleep(time){
//     return new Promise((res,rej)=>{
//         if(typeof time !== 'number'){
//             rej('argument to sleep function should be a number')
//             return
//         }
//         setTimeout(() => {
//             res({status:200})
//         }, time);
//     })
// }

// // setTimeout(() => {
// //     console.log('first')
// // }, 0    );

// // Promise.resolve()
// // .then(res=>console.log('promise'))

// always promise get invoked first then other functions, bcoz it gets more priority
// Async and await comes after promises, it is the extension of promis to make it write easier



// // async function test(){
// //     try{
// //         console.log('waiting for results')
// //         let res = await sleep(2000)

// //         console.log(res)
// //         if(res.status===200){
// //             return true
// //         }
// //     }
// //     catch(err){
// //         console.log(err)
// //     }
// // }

// // test()
// // .then(res=>{
// //     console.log(res)
// // })                    // async function returns promise


//-------------------- parallel requests. 20 req. 

// var promise = []
// promise[0] = sleep(100).then(res=>'promise 1')
// promise[1] = sleep(500).then(res=>{
//     throw new Error('error message')
// }).catch(err=>err)
// promise[2] = sleep(2000).then(res=>'promise 3')
// promise[3] = sleep(1000).then(res=>'promise 4')

// Promise.all( promise ).then(res=>console.log(res))

// in above, since we are passing different times in sleep but we get 
// all promise return at same time when every promise get passed.

// Promises.all( promise1, promise2 ).then(res=>console.log(res))


// -----------------waterfall model. 1 req -> 2nd req -> 3rd
// async await, recursion 
// 

// let name = 'masai'
// // block scoped, redeclaration, hoisting
// const lname = 'school'
// // reassignment, redeclaration is not allowed and block scoped

// function test(){
//     // hoisting takes place
//     console.log(name)
//     var name = 'bangalore'
// }

// test()
// <--->
// let name = 'masai'
// // block scoped, redeclaration, hoisting
// const lname = ['nrupul','albert']
// // reassignment, redeclaration is not allowed and block scoped
// lname[0] = 'aman'

// console.log(lname)

//---------------------- Arrow fucntions

// sugar syntaxing, easier way to write functions

// this keyword better


// var person ={
//     name: 'masai',
//     display: ()=>console.log(this),  // refer to empty obecjt
//     displayES5: function(){             // refer to person
//         console.log(this.name)
//     }
// }

// // es6
// person.display()     / undefined
// // es5
// person.displayES5()  /masai



// //------------------- call, apply, bind
// // change the context of this


// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             data: [1,2,3]
//         }
//         // this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick=()=>{
//         console.log(this.state.data)
//     }
// }

// ( context of that object )

// --------------------PROTOTYPE
// it is a mechanism in a way javascript can inherits properties from other objects

// classes -> sugar syntax

// var array = new Array(10).fill(10)
// console.log(array.map)

// prototype chain means first js search for method(map) in array, if it doesnot find
// then it goes to its parent i.e. array.prototype and so on.

//-------------------- constructor

// function Person(name, age){
//     this.name = name
//     this.age = age
// }

// Person.prototype.display = function(){
//     console.log(this.name)
// }


// // new
// var person = new Person('masai',25)
//console.log(person)

//-- if we remove "new" then we can write like this

// function Person(name, age){
//      var obj = {}
//     obj.name = name
//     obj.age = age
//      return obj
// }

// var person = Person('masai',25)
//console.log(person)

//---------include display function in prototyp

// function Person(name, age){
//     this.name = name
//     this.age = age
// }

// Person.prototype.display = function(){
//     console.log(this.name)
// }

// var person = new Person('masai',25)

// person.display()

//------------------------------- CLASS

// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//         this.sleep()
//     }
//     sleep(){
//         console.log(this.name,'is sleeping')
//     }
// }

// class Coder extends Person{
//     constructor(name,age,role){
//         super(name,age) 
//         this.role = role
//     }

//     code(){
//         console.log(this.name,'is coding')
//     }
//     role(){
//         console.log(this.name,'role is',this.role)
//     }
//     profile(){
//         console.log(this.name, this.age, this.role)
//     }
// }


// var person = new Person('masai',25)
// var coder = new Coder('haren',21,'frontend')

// coder.code()
// coder.sleep()
// coder.profile()

// if we extend subclass from class then we must write super
// super refers to parent class and order of arguments also matter.
// if we change super(name,age) => super(age, name) output will reverse

//-----------------------------------XXXXX---------------------------------
// destructuring, default, promises, async await, Sets, Maps, BigInt 

// BigInt
// just add n after every number

// var value = 2n**53n -1n

// console.log(value, value+1000n)

// console.log((value+100n)%10n)

// var val = 2**53-1

// console.log((val+100)%10)

// EVENT LOOP

// 2-5 min
// structure to explain Eventloop:-
// Javascript syncronous lang
// handle async behavious
// its browser based lang, lot of things work around networks
// Call stack - keep track of what is being executed and what memory 
// heap memory
// web api container
// Task queue 
// If the call stack is not empty, then the task queue doesnot push to stack
// blocking code
// overflow the stack
// Promise has a higher priority // optional
// priority queues.
//Eg:
// setTimeout(() => {
//     console.log("first")
// },0)
// Promise.resolve()
// .then(res => console.log("Promise")) // here promise prints first bcoz of priority

// THIS
// this refers to an object itself
// call, apply, bind
// functions, this is created function invoked
// arrow fun dont have this
// if this written in window/global object, it refer to window
// "use strict"; it gives undefined

//------- objects and arrays
// how to know array or object?

// var arr  = [1,2,3,4,5]
// var obj = {
//     name:'masai',
//     place: 'blr'
// }
// console.log(typeof arr, typeof obj) //object object

// Object.defineProperty(obj,'length',{
//     value: 0,
//     writable: false,
//     enumerable: false
// })
// console.log(Array.isArray(arr)) // true

// console.log(obj.hasOwnProperty('place'))

// console.log(Object.getOwnPropertyNames(obj))

// console.log(Object.keys(obj))

// // non enumerable properties

// console.log(++obj.length)
// console.log(obj.length)

// fetch vs axios
// fetch  doesnt convert query param to url directly
// more control over axios than fetch
// both are promises
// axios uses xmlhttp req.