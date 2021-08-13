// function sum(m,p,e){
//     m=m
//     p=p
//     e=e
//     return m+p+e
// }
// let to = sum(40, 40)
// console.log(to) //nan 



// let arr = ['a','b','c','d','e']
// const func = function([f, ...r]) {
//     return r.reduce(function(a,c){
//         return a+c
//     }) + f
// }
// console.log(func(arr)) //bcdea



// const arr = [1,2,3]
// arr = arr.map(function(a){
//     return a+10
// })
// console.log(arr)// TypeError: Assignment to constant variable.



// function user(){
//     console.log(name) // undefined
//     console.log(age) // ReferenceError: Cannot access 'age' before initialization
//     var name = "jacky"
//     let age = 23
// }
// user()



// "use Strict"
// var dec either let or const
// let name = "masai"   // masai school
// const name = "masai"  //masai, type
// function person(){
//     console.log(name)
//     name = "school"
// }
// person()
// console.log(name)



// const str = ["jdfkd", "sdksn"]
// let str1 = str
// str1 = [1,2,4]
// str1.push(":maddy")
// console.log(str === str1)
// console.log(str1)// false, [1,2,4, "maddy"]



// const sum = (x,y) => {
//     x = x || 5
//     y = y ||10
//     return x+y
// }
// console.log(sum(0,10))// 15



// function getName(){
//     var status = true
//     if(status){
//         const name = "masai"
//     }
//     console.log(name)
// }
// getName()// ref error name is not defined



// console.log(name)
// const name = "masai" // ref


// console.log(name)
// let name = "masai" // ref



// const name
// name = "masai" // syntac



// const sum = (x,y) => {
//     x = x && 5       // if 0 in arg then && will not work
//     y = y || 5       // here it will take argument
//     return x+y
// }
// console.log(sum(20,5)) // 10



// let a = 1
// let b = 2
// [a,b] =[b,a]
// console.log(a,b)



// arr = ['a','b','c','d','e']
// const func = ([f, ...r]) => r.reduce((a,c) =>a+c) + f
// console.log(func(arr)) // bcdea



// function person(){
//     const name = "wrick"
//     console.log(name)
// }
// console.log(name)   // referror
// person()



// const num = [10, 20, 30]
// num[0] = [20, 30, 40]
// const num1 = num
// num1.push(60)
// console.log(num1 == num) //true




// "use strict"
// let arr = [1,2,3]
// const name = arr
// name[0] = [4,5,6]
// value = name
// console.log(value) //ref




// function sum(x,y,z){
//     return x+y+z
// }
// var res = sum(...[1,2,3,5,6,7,8])
// console.log(res) //6




// const sum = (x,y) => x+y
// function sum(x,y){x+y}



// console.log(sum(5,6))
// let sum = function(x,y){
//     return x+y
// } // ReferenceError: Cannot access 'sum' before initialization



// const x = (x,y) => x+y
// x(5,10) // nothing




// function bird(){
//     "use strict"
//     name = "sapfe"
//     console.log(name)
// }
// bird() // ref



// function details({name, age, gender}){
//     return `Name:${name}
//             Age:${age}
//             Gen:${gender}`
// }
// user = {
//     name:"lokse",
//     age:28,
//     gender:"male"
// }
// console.log(details(user))
//Name:lokse Age:28 Gen:male



// what is wrong in this code
// function signup(name, email, id){
//     return `Hi, {name}. please check mail: {email} for auth, ur user id:"{id}"`
// }

// console.log(signup(lokesh, gmail,35))// ref




// function sum(x,y, ...z){
//     return z
// }
// var res = sum(...["masai","schl","ninja", "samurai", "apache"])
// console.log(res) //[ 'ninja', 'samurai', 'apache' ]

