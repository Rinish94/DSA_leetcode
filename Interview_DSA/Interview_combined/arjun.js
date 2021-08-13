// let arr = [1, 2, 3, [[4, [5]]], [6]]
// let arr2 = [...arr, 7, 8]
// // arr.flat
// console.log(arr2)
// console.log(arr2.flat(3))
// [1, 2, 3, [4, [5, 6]], 7]
// [1, 2, 3, 4, 5, 6, 7]

// prototype of flat function.
// Array.prototype.myFlat = function(){
//     let res = []
//     for(let i=0; i<this.length; i++){
//         if(Array.isArray(this[i])){
//             res.push(...this[i].myFlat())
//         }
//         else{
//             res.push(this[i])
//         }
//     }
//     return res
// }
// let arr = [1, 2, 3, [4, [5, 6]], 7]
// console.log(arr.myFlat())


// create polyfill for bind
// let square = {
//     side: 5,
//     getArea: function(a, b){
//         return this.side * a * b
//     }
// }
// let square1 = {
//     side: 4
// }
// let r = square.getArea.myBind(square1, 2, 2)
// console.log(r(2))

// Function.prototype.myBind = function(obj){
//     let that = this
//     let args1 = arguments
//     return function(){
//         let args2 = arguments
//         return that.call(...args1, ...args2)
//     }
// }
// let res = square.getArea.myBind(square1, 2)
// console.log(res(3))



// function logName(name){
//     console.log(name)
// }
// let debounceLogName = debounce(logName, 1000)
// debounceLogName("a")
// debounceLogName("ab")
// debounceLogName("abc")
// function debounce(cb, delay){
//     let time
//     let func
//     return function(){
//         if(time && Date.now() - time < delay){
//             clearTimeout(func)
//             time = Date.now()
//         }
//         else{
//             time = Date.now()
//         }
//         func = setTimeout(() => {
//             cb.call(this, ...arguments)
//         }, delay)
//     }
// }

// Promise.reject().then(() => console.log("t1"))
// .then(() => console.log("t2"))
// .catch(e => new Error("err"))
// .then(() => console.log("t3"))
// .then(() => console.log("t4"))
// .catch(() => console.log("c2"));
// //it will print t3, t4

// Promise.reject().then(() => console.log("t1"))
// .then(() => console.log("t2"))
// .catch(e => { throw new Error("err")})
// .then(() => console.log("t3"))
// .then(() => console.log("t4"))
// .catch(() => console.log("c2"));
// //it will print c2


