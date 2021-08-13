// ---------------------------------------------------question 11

// ---------------------------------------------------question 10
// const person = { name: 'Lydia' };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

// for .call() we will get the output "Lydia is 21"
// as it sets the this keyword and immediately executes the function.
// for .bind() we wont get the output or get one saying that it is a function. As .bind() creates a copy of that function and sets the this keyword.
// so it would be ideal to use .bind() like the example given below
// const person = { name: 'Lydia' };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// const ans =sayHi.bind(person, 21)
// console.log(ans());
// ---------------------------------------------------question 9

// Question:- You are given a array of numbers. 
// You need to shift all the zeroes to starting of array. See example below.
// Eg. Input :-1 0 3 0 5
//     Output:- 0 0 1 3 5
// Expected time complexity :- O(N), Space :- O(1).
// soln:

// function moveZeros( arr ){
//     let n = arr.length - 1
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(arr[i] !== 0){
//             arr[n] = arr[i]
//             n--
//         }
//     }
//     while( n >= 0){
//         arr[n] = 0
//         n--
//     }
//     console.log(arr)
// }
// moveZeros( [1, 0, 3, 0, 5] )

// ---------------------------------------------------question 8

// print first, third secnd, inorder,
// second is in set timeout so write alternative code

// const second = (resolve) => console.log(resolve)
// const delay = () => {
//   return new Promise((resolve, reject) => {
//     resolve("second");
//   })
// }
// console.log("First");
// delay().then(second);
// console.log("Third");

// Here, we are wrapping the promise in order to split the execution of second 
// as a microtask. So what happens over here is that whenever the delay is called,
//  the promise is executed asynchronously.

// ---------------------------------------------------question 7

// function foo1(){
//     return {
//         bar: "hello"
//     }
// }

// function foo2(){
//     return 
//     {
//         bar: "hello"
//     }
// }
// console.log(foo1(), foo2()) //{ bar: 'hello' } undefined


// foo1 returns object. foo2 returns undefined because in foo2 the object is not 
// placed on the same line as the return statement (edited) 

// Harsh Gaur  1 hour ago
// Return always returns the values that are inline to it. That being said, 
// no, these two functions won't return the same thing as in foo2 we have the block 
// that is below the return statement and it won't be reached so foo2 return undefined,
//  however foo1 we will get the output 

// first function returns the object and the second function returns undefined, 
// the reason is that in second function because of automatic semicolon insertion,
//  the return statement ends inline and the function  execution is completed 

// ---------------------------------------------------question 6
// var hero = {
//     _name: "john Doe",
//     getSecretIdentity: function(){
//         return  this._name;
//     }
// }

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity()) 
// console.log(hero.getSecretIdentity())

// stoleSecretIdentity() will return undefined
// where as hero.getSecreteIdentity() will return "John Doe"
// stoleSecretIndentity() lost the reference of the object
//  that was exectuting it, we can over come this by using bind, 
//  if we do stoleSecretIndetity.bind(hero), we get the output "John Doe"


// ---------------------------------------------------question 5

// function sayHi() {
//     console.log(name);  // undefined because var
//     console.log(age); // ref error because let
//     var name = 'Lydia';
//     let age = 21;
//   }
//   console.log(name) // ref error
//   sayHi();

//   A: Lydia and undefined
//   B: Lydia and ReferenceError
//   C: ReferenceError and 21
//   D: undefined and ReferenceError // ans

// Option D, both the variable comes under hoisting, 
// bcos of hoisting the variable which is declared with Var keyword gets hoisted 
// with default value undefined.  Variable age is defined as let and it is trying 
// to access before it's declaration and Initialization with value so 
// gets reference error..

// Because, when the function sayHi is invoked, the functional execution context
//  is created and when the code inside the function runs and due to hoisting in 
//  javascript the variable declaration goes at the top. But in hoisting when the 
//  variable is declared with var gets initialised with undefined value but 
//   if the variable is declared with let and is called before it's actual declaration 
//   will give refrence error.


// //------------------------------------------------- question 4
// function getPersonInfo(one, two, three) {
//     console.log(one)
//     console.log(two)
//     console.log(three)
// }
// const person = "Lydia";
// const age = 23

// getPersonInfo(`${person} is ${age} years old`)
// ans 
// [ '', ' is ', ' years old' ]
// Lydia
// 23

//-----------------------------------------------------question 3

// print same output without using timeout
// console.log("First")
// setTimeout(()=>{
//     console.log("Second")
// },0)
// console.log("Third")

// ------------------------------------------------------question 2 
// find unique
// let input = "monsoon"
// let str = input.trim().split('')
// // console.log(str)
// let obj = {}
// for(let i=0; i<str.length; i++){
//     let el = str[i]
//     obj[el] = obj[el] === undefined ? obj[el] = 1 : ++obj[el]
// }
// console.log(obj)

// ------------------------------------------------------question 1
// what is the output

// function bark() {
//     console.log('Woof!');
// }
//   bark.animal = 'dog';

// Option A : Nothing, this totally fine!
// two reasons for that -
// 1st)  In JS , functions are said to be 1st class objects and 
// so the difference between an object and function is that a function can be called ,
// which brings me to the second point
// 2nd) The function is not called here so no output. (edited)