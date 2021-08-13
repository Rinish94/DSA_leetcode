
// // what is sequence of output  -------------------------------------
// console.log("A");
// console.log("B");
// setTimeout(() => console.log("C"),0);
// console.log("D");
// for(let i = 0; i < 10; i++)
// 	console.log("E",i);

// // what is sequence of output  
// console.log("A");
// console.log("B");
// setTimeout(()=>{
//     console.log("C")
// },0);
// Promise.resolve().then(() => console.log("D"));
// for(let i = 0; i < 10; i++)
// 	console.log("E",i); 


// // what is output ---------------------------------------------
// Promise.reject().then(() => console.log("t1"))
// .then(() => console.log("t2"))
// .catch(e => console.log("c1"))
// .then(() => console.log("t3"))
// .then(() => console.log("t4"))
// .catch(() => console.log("c2"));
// print first catch and direct second catch
// answer
// Promise.reject().then(() => console.log("t1"))
// .then(() => console.log("t2"))
// .catch(e => { console.log("c1"); return Promise.reject() })
// .then(() => console.log("t3"))
// .then(() => console.log("t4"))
// .catch(() => console.log("c2"));


// // are both same?---------------------------------
// // (a, b) => a + b
// // (a, b) => { return (a + b); }


// // print console--------------------------------------
// const obj = { a: 10, b: 20, c: { d: 200 } };
// obj.a = 1;
// console.log("OBJ1: ",obj);
// const obj2 = { ...obj };
// // const obj2 = {...obj, c:{...obj.c}}  // this way we can change value
// obj2.c.d = 121;
// console.log("OBJ2: ",obj2);
// obj = obj2;
// console.log("OBJ3: ",obj);


// // what is output of both------------------------------------------
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// for(let i = 0; i < arr.length; i++) {
//     if(i === 5) break;
//     else console.log(arr[i]);
// }
// arr.forEach((val, i) => {
//     if(i === 5) return;
//     else console.log(val);
// });

// // make forEach such that it will print same result as for loop 
// // answer
// arr.forEach((val, i) => {
//     if(i === 5) throw  new Error ("line exceeded");
//     else console.log(val);
// });

// //------------ print ans = 900------------------------------
// const square = (a) => a*a;
// const addTen = (a) => a+10;
 
//  function compose(...args){
//     return function (a){
//         let ans = a
//         for(let i=0; i<args.length; i++){
//             ans = args[i](ans)
//         }
//         return ans
//     }
//  }
//  compose(square, addTen)(20) 

//  // --------------find the occurance of unique alphabets in object form-------------
// const arr = [{type: "a", count: 0},{type: "b", count: 0},{type: "a", count: 0},{type: "c", count: 0},{type: "a", count: 0},{type: "b", count: 0},{type: "a", count: 0},{type: "a", count: 0},]
// const occr = arr.reduce((acc, cur) => {
//     if(acc[cur.type]){
//         acc[cur.type] += 1
//     } else {
//         acc[cur.type] = 1
//     }
//     return acc
// }, {})
// console.log(occr)


// // forEach vs map
// // slice vs splice
// // dispatch 

// function myfunc1(){
//     var a = 50;
//     ( function(){
//     console.log(a);
//     const a = 1000;
//     console.log(a)
//     })();
// }
//  myfunc1()

//  let a = b = 5 
//  console.log(a) 
//  console.log(b)

 
// var obj1 = { x: 10, y: 20};
// var obj2 = Object.create(obj1);
// obj2.x = 44;
// obj2.y = 99;
// delete obj2.y;
// console.log(obj2.y)  // refer to obj1 after we delete obj2.x

// console.log(4>3>1)  // left to right (true > 1) => false

//---------what is output---------------------
// class Test {
//     val = 1;
//     constructor() {
//         setTimeout(function() {
//             this.val = 2;
//         }, 100);
//     }
// }
    
// const test = new Test();
    
// setTimeout(function() {
//     console.log(test.val)   // 1 but if we replace function inside constructor with arrow functn then it give 2
// }, 1000);