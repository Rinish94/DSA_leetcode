{/* <div>
    <button>1</button>
    <button>4</button>
    <div>
        <button>2</button>
        <button>5</button>
    </div>
    <div>
        <button>3</button> 
    </div>
</div>

button {
    color:"red"
}
div > div > button : nth-oftype(1){
    color :"green"
}

<p>fllkffff<bold>lokesh</bold></p>  */}

// let acl = "lokes"
// acl = "pradeep"
// console.log(acl"
// let btn = document.querySelectorAll("button")
// let sum = 0
// for(let i=0; i<btn.length; i++){
//     sum++
// }

// let fab = [0,1,1,2,3,5]

// let n = 21
// function fabonacci(n){
//     for(let i=0 ; i<=21; i++){
//         res.push(i)
//     }
// }
// console.log(fabonacci(21))

// var // fucn 
// let const // block {}
// const arr= [1,2,3,4,5]
// arr.map((item,i) => <Child  key={i} {..item}/>)


// select salary from employee where 
// jwt
// void

// let arr = [1,1,2,2,3,3,4,5]
// let k = 2
// let obj = {}

// for(let i=0; i<arr.length; i++){
//     obj[arr[i]] = arr[i]
// }
// let val = Object.keys(obj)
// console.log(obj)
// for(let i=0; i<val.length; i++){
//     let sum = Number(val[i]) + k
//     for(let j=i; j<val.length; j++){
//         if(sum == Number(val[j])){
//             console.log(val[i], val[j])
//         }
//     }
// }

// let promise = new Promise((resolve, reject) => setTimeout(() => resolve(1000), 1000));

// promise.then((val) => console.log(val)).catch(err => console.log(err));

// function PromisePolyFill(executor) {

//     let onResolve;
 
//      this.then = function(callback) {
//          // TODO: Complete the impl
//          onResolve = callback;
//          return this;
//      };
 
//      this.catch = function(callback) {
//          // TODO: We are ignoring this part for simplicity , but its implementation is similar to then
//          return this;
//      }
//  }
 
//  let executor = (resolve, reject) => setTimeout(() => resolve(1000), 1000)

// function PromisePolyFill(executor) {

//     let onResolve;

//     function resolve(val) {

//         onResolve(val);
//     }

//     this.then = function(callback) {
//         onResolve = callback;
//         return this;
//     };

//     this.catch = function(callback) {
//         return this;

//     }

//     executor(resolve);
// }

// // Sample code for test :
// new PromisePolyFill((resolve) => setTimeout(() => resolve(1000), 1000)).then(val => console.log(val));

//-----------------------------------------------------------
// console.log(1)

// setTimeout(()=>{
//     console.log("setTimeout "+2)
// },1000)

// let prm = new Promise((res, rej) => {
//     res(3)
// })

// prm.then((res)=>console.log("promise " +res))

// console.log(4)
//----------------------IIFE--------------

// (function(){
//     var a = 10
//     console.log(a)
// })()
// console.log(a)

//-------------------async await----------------------
// console.log("Start")        //1

// async function func () {
//     console.log("Inside func")      //3
//     const response = await myName()
//     console.log("await resolved")   //7
//     return response;
// }

// console.log("Before calling func")      //2
// let a = func()
// console.log("After calling func")       //4
// console.log(a)                          //5
// a.then(res => console.log(res))         //8

// console.log("End")                  //6

// function myName(){
//     return new Promise((res, rej)=>{
//         res("Lokesh")
//     })
// }