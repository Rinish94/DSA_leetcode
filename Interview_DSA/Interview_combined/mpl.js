// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
  
//   foo();
//   console.log(typeof(a)) // undefined
//   console.log(typeof(b)) // number
//   console.log(a) ref error
//   console.log(b)   0

// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;

// console.log(clothes[0]); // => ???

// const delay = () => {
//     return  new Promise(function (res, rej) {
//         setTimeout(() => {
//             res()
//         },2000)
//     })
// }

// async function delayedLog (item) {
//     await delay()
//     console.log(item)
// }

// delayedLog("Lokesh")

// convertDotStringToCamelCase('abcd.game.xyZ') => abcdGameXyZ

// var str = 'abcd.game.xyZ'
// let arr = []
// function convertDotStringToCamelCase(str){
//     let flag = false
//     for(let i=0; i<str.length; i++){
//         if(str[i] == "."){
//             flag = true
//             continue
//         } 
//         if(flag == true){
//             arr.push(str[i].toUpperCase())
//             flag = false
//         }else {
//             arr.push(str[i])
//         }
//     }
//     console.log(arr.join(""))
// }
// convertDotStringToCamelCase(str)

// let arr = [1,2,3,4,5]
// let ans = arr.filter((el) => el !== 3)
// console.log(ans)

{/* <body>
    <div id='root'>
    </div>
    <script type="text/javascript">
        let root = document.getElementById("root")
        let div = document.createElement("div")
        div.innerHtml = "Hello World"
        root.append = div
    </script>
</body> */}