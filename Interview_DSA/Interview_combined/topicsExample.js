
//---------------Callback---------------------------------
// function greet(name, cb) {
//   console.log(`Hello ${name}`);
//   cb();
// }

// function cb() {
//   console.log("Callback Function");
// }

// greet("Abhishek", cb);
//output
// Hello Abhishek
// Callback Function
//--------------Promise--------------------------------------

// let flag = false
// const promise = new Promise(function (resolve, reject ){
//   // setTimeout(() => {
//   //   resolve("I'm a Promise!");
//   // }, 2000);

//   //or 

//   if(flag){
//     resolve("resolve")
//   }else{
//     reject("reject")
//   }
// })
// promise.then(value => console.log(value))
// .catch((err) => console.log("Error", err)) 

//----------sleep ------------------------
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


// --------------promise chaining----------------
// .then always return promise.

  // new Promise (function(res, rej){
  //   setTimeout(() => res(1), 1000)
  // })
  // .then(function(result){
  //   console.log(result) //1
  //   return result * 2
  // })
  // .then(function(result){
  //   console.log(result) //2
  //   return result * 3
  // })
  // .then(function(result){
  //   console.log(result) //6
  //   return result * 4
  // })

  //--------------------promise.race & all------------
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//       resolve("One")
//     },5000)
// });
// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//       resolve("Two")
//     },1000)
// });
// // promise1.then((res)=>console.log(res))

// Promise.race([promise1, promise2])  // change here race to all
// .then((value) => {console.log(value)})
// .catch(error => console.log(`Error in promises ${error}`))


//----------------------async await------------------
// function delay() {
//   return new Promise(resolve => setTimeout(resolve, 2000));
// }

// async function delayedLog(item) {
//   await delay();
//   return item
// }
// delayedLog("Lokesh").then((e) =>console.log(e))
// console.log(delayedLog())
// console.log("object")

//-----------old example
// function delay() {
//   return new Promise(resolve => setTimeout(resolve, 2000));
// }

// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }
// delayedLog("LOkesh")

// async function processArray(array) {
//   for (const item of array) {
//     await delayedLog(item);
//   }
//   // array.forEach(async (item) => {
//   //   await delayedLog(item);
//   // });  
//   console.log('Process completed!');
// }
// processArray([1, 2, 3, 5]);

//-----------------Currying-----------------------------------
// Without Currying

// function mult(a, b, c, d) {
//   return a * b * c * d;
// }

// mult(1, 2, 3, 4); // 24
// With Currying

// function mult(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a * b * c * d;
//       };
//     };
//   };
// }

// mult(1)(2)(3)(4); // 24;


//-----------------Closure---------------------------------------
// function outer() {
//   var count = 1;
//   return function () {
//     console.log(count);
//     count++;
//   };
// }

// var temp = outer();
// temp(); // 1
// temp(); // 2
// temp(); // 3

// console.dir(temp) // to see anonymous function, expand scope to see closure




//-----------------hoisting----------------------------------------
// func();
// var x = 10;
// function func() {
//   var y = 20;
//   console.log(x); // undefined
//   console.log(y); // 20
// }


// -----------------synchronous code -----------------------------
// var a = 10;
// function func() {
//     console.log(a);
// }
// func(); // 10
// console.log("object")  // object

// Asynchronous code
// console.log("start");

// setTimeout(function () {
//   console.log("The wait time is 2 seconds");
// }, 2000);

// console.log("end");

// -------difference between Proto and Prototype------------------

// var arr = ["Abhishek", "Aman"];

// arr.__proto__;
// //[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// Array.prototype;
// //[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]


// ----------setTimeout/ clearTimeout-----------------
//   setTimeout(function () {
//     console.log("Hello World!");
//   }, 2000);
  
  //Hello World! will get printed after 2 seconds (2000 milliseconds).

// clearTimeout

//   var func = setTimeout(function () {
//     console.log("Hello World!");
//   }, 2000);
  
//   clearTimeout(func);
  
  //Nothing will get printed in the above case.

// ------------call apply and bind----------------------
// generally used to set the values of "this" keyword, 
// irrespective of way in which the functn is called
//call
// var obj1 = {
//     num: 3,
//   };
  
//   var addTo = function (a, b, c) {
//     return this.num + a + b + c;
//   };
  
//   console.log(addTo.call(obj1, a, b, c));

//   appply
//   var arr = [8, 8, 9];

//   console.log(addTo.apply(obj2, arr));

// bind
// var obj3 = {
//     num: 3,
//   };
  
//   var addTo = function (a, b, c) {
//     return this.num + a + b + c;
//   };
  
//   var newFunc = addTo.bind(obj3);
  
//   console.log(newFunc(8, 8, 9));



// ------------------constructor-----------------------
// function Person(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
  
//   var myself = new Person("Abhishek", 25, "abc@gmail.com");
//   console.log(myself)



// function Bike(model,color) {
//   this.model = model;
//   this.color = color;
// }

// Bike.prototype.getDetails = function() {
//   return this.model + ' bike has ' + this.color + ' color';
// };
// var bike = new Bike("pulsar","Black")
// console.log(bike.getDetails())

//---------replace constructor with class--------------
// class Bike{
//   constructor(color, model) {
//     this.color= color;
//     this.model= model;
//   }

//   getDetails() {
//     return this.model + ' bike has ' + this.color + ' color';
//   }
// }
// var bike = new Bike("pulsar","Black")
// console.log(bike.getDetails())

// ---------------this--------------------------------
// var person = {
//     name: "Aman",
//     age: 25,
//     hello: function(){
//       console.log(this);
//     }
//   }
  
//   person.hello();
// console.log(person)
  
//   {name: "Abhishek", age: 25, hello: [Function: hello]}
//   {name: "Abhishek", age: 25, hello: [Function: hello]}


///-----------coercion-----------------------------
// type convertor

// var a = 10 + '20';    //1020
// var b = '20' + 10;    //2010
// var c = true + '10';  //true10
// var d = 10 - '5';     //5
// var e = 10 * '5';     //50
// var f = 10 / '5';     //2
// var g = 10 % '5';     //0
// var h = true + 2;     //3
// var i = false + 2;   //2
// var j = (10 == '10'); // true
// var k = (true == 1);  //true
// var l = (true == 'true')// false
// var m = 10 + +"20"    //30

// console.log(a,b,c,d,e,f,g,h,i,j,k,l,m)

//-------------------different ways of creating object-------------
// object constructor----------------
    // var a = new Object()

// create object method----------------------

// var obj = Object.create({})  // {}
// var obj = Object.create(null)   // null object

// var obj = Object.create({a:1, b:2}) //{}
// let ans = Object.entries(obj)   //[]

// const person = {
//   isHuman : false,
//   print : function () {
//     console.log(this.name +  " " + this.isHuman)
//   }
// }
// const me = Object.create(person)
// console.log(me) // {}

// me.name = "Lokesh"  // name is proprerty set on "me" but not on person
// me.isHuman = true   // inherited properties can be over written

// me.print() // Lokesh true

// obect literals--------------------
//  var obj = {}

//function constructor------------------
// function Person(name){
//   var object = {};
//   object.name=name;
//   object.age=21;
//   return object;
// }
// var object = new Person("Sudheer");
// console.log(object)     //{ name: 'Sudheer', age: 21 }

// function constructor with prototype----------
// function Person(){}
// Person.prototype.name = "Sudheer";
// var object = new Person();

// console.log(object.name) // sudheer

// ES6 classes -------------------------
// class Person {
//   constructor(name) {
//      this.name = name;
//   }
// }

// var object = new Person("Sudheer");
// console.log(object)   //Person { name: 'Sudheer' }

// singleton pattern (only be instantiated one time)--------------
// var object = new function(){
//   this.name = "Sudheer";
// }
// console.log(object)   //{name: 'sudheer'}

// ----------------------deep/ shallow copy-----------------------
// let obj1 = {a:1, b:2, c:{d:3}}
// shallow copy
// let obj2 = obj1  // change both
// let obj2 = {...obj1}
// let {...obj2} = obj1
// let obj2 = Object.assign({},obj1)

// Deep copy
// let obj2 = JSON.parse(JSON.stringify(obj1))
// let obj2 = {...obj1, c:{...obj1.c}}
// let obj2 = {c:{...obj1.c}}   // to get c only

// obj2.c.d = 5
// console.log(obj1)
// console.log(obj2)

// ---------------------------object assign.--------------------
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// --------------Creating simple class component-------------------------------------

// class ClassRoom extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count : 0};
//     this.addCount = this.addCount.bind(this);
//   }
 
//   addCount(){
//     this.setState((prevState)=>{
//       return {count: prevState.count++}
//     });
//   }
 
//   render(){
//     return(
//       <div>
//          {/* accessing directly from props */}
//         <h2>{this.props.name}</h2>    
//         <h4>{this.props.rollNumber}</h4> 

//         {/* using state  */}
//         <p>Number of students in class room: {this.state.count}</p>
//         <button onClick={this.addCount}>Add Student</button>
//       </div> 
//     )
//   }
//  }

//------------------understand .then and catch---------------------
// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data);    // success

//   return job(true); 
// })

// .then(function(data) {
//   if (data !== 'victory') {
//       throw 'Defeat';     // it will directly send to catch
//   }

//   return job(true);
// })

// .then(function(data) {
//   console.log(data);
// })

// .catch(function(error) {
//   console.log(error);  // Defeat

//   return job(true);
// })

// .then(function(data) {
//   console.log(data);  // success

//   return job(false);
// })

// .then(function(data) {
//   console.log(data);  

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error);     //error

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data);    //error Caught

//   return new Error('test');   // it is not promise and also it is not failing 
// })

// .then(function(data) {
//   console.log('Success:', data.message);  //success: test
// })

// .catch(function(data) {
//   console.log('Error:', data.message);
// });


//------------promise.all------------------------
// promise.all print result in the seq which they pass in array, not the time.
// if any one of promie.all rejected then it will go to catch and print rejected one and
// we cant access other resolved promises 

// let p1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function(resolve, reject) {
//   setTimeout(reject, 300, 'p4');
// });

// let p5 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 800, 'p5');
// });

// let promise = Promise.all([p1,p2,p3,p4,p5])   // error p4

// promise
// .then(function(data) {
//   data.forEach(function(data) {
//     console.log(data);
//   });
// })

// .catch(function(error) {
//   console.error('error', error);
// });

// What if you want to start multiple asynchronous jobs at once and 
// you want results even if a job is rejected?
// so we can write in this way

// let promise = Promise.all([p1.catch(function() {}), p2.catch(function() {}), p3.catch(function() {}), p4.catch(function() {return "lks"}), p5.catch(function() {})]);
// (it will not go to catch block of above code)

// we don't give the promises directly to Promise.all. 
// We give the result of p.catch (this is an auto-resolved promise) 
// so Promise.all won't stop. In this case, however, you have to test the 
// received data yourself to check for errors

// how you can test if an object is a promise : obj instanceof Promise.

// throw error ----------------------------------
// try {
//   throw new Error('Whoops!')
// } catch (e) {
//   console.error(e.name + ': ' + e.message) //Error: Whoops!
// }

// try {
//   throw 'Whoops!'
// } catch (e) {
//   console.error(e)    // Whoops!
// }
//-----------------------remove hyphen-----------------------
// let str = "lokesh-nimje"
// let arr = []
// for(let i=0; i<str.length; i++){
//   arr.push(str[i])
// }
// let ans = arr.filter(element => {
//   return element != "-"
// });

// console.log(ans.join(""))

// arr2 is subset of arr1 or not?-----------------------------
// let arr1 = [1,2,3,3,4,5,6,2,0]
// let arr2 = [1,2,3,6,0]
// let obj1 = {}
// let obj2 = {}
// for(let i=0; i<arr1.length; i++){
//     let el = arr1[i]
//     obj1[el] = obj1[el] === undefined ? 1 : ++obj1[el]
// }

// for(let i=0; i<arr2.length; i++){
//     let el = arr2[i]
//     obj2[el] = obj2[el] === undefined ? 1 : ++obj2[el]
// }

// let flag = true
// for(val of arr2){
//     if(obj1[val] === undefined){
//         flag = false
//         break
//     }
// }
// console.log(flag ? "Subset" : "not a subset")   
// N * 2M