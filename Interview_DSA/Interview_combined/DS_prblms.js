// ------------Sum of triplets-------------

// let arr = [1,2,3,4,5,6,7,8,9]
// let c = 0
// let sum = 22
// let len = arr.length;
// for(let i=0; i<len; i++){
//     for(let j=i+1; j<len; j++){
//         for(let k=j+1; k<len; k++){
//             let res = arr[i]+arr[j]+arr[k]
//             if(res === sum){
//                 console.log(arr[i], arr[j], arr[k])
//                 c++
//             }
//         }
//     }
// }
// console.log(c) 


// const arr = [1,5,8,9,7,6,2]
// const sum = 15
// let count = 0
// arr.sort((a,b) => a-b)
// for(let i = 0; i < arr.length-1; i++){
//     let j = i+1
//     let k = arr.length-1
//     while(j < arr.length && k >= 0 && k !== j){
//         let output = arr[i] + arr[j] + arr[k]
//         if(output === sum){
//             count++
//             j++
//         } else if(output > sum){
//             k = k - 1
//         } else if(output < sum){
//             j = j + 1
//         }
//     }
// }
// console.log(count)
// Answer: 4

// nums = [-1,0,1,2,-1,-4]
// var threeSum = function(nums) {
//     nums.sort((a,b) => a-b)
//         const arr = []
        
//         for (let i = 0; i < nums.length; i++){
//             let start = i+1
//             let end = nums.length-1
//             while(start < end){
//                 let sum = nums[i]+nums[start]+nums[end]
//                 if(sum === 0){
//                     if(nums[start] === nums[start+1]){
//                         start++
                        
//                     }
//                     if(nums[end] === nums[end-1]){
//                         end--
//                         start++
//                     }
//                     arr.push([nums[i],nums[start],nums[end]])
//                 } else if(sum > 0){
//                     end--
//                 } else {
//                     start++
//                 }
//             }
//             while(nums[i] === nums[i+1]) {
//                 i++
//             }
//             start++
//         }
//         console.log(arr)
// }


// for(var i=0; i<3; i++){
//     setTimeout(function(){ 
//         console.log(i);
//     },1000 + i)
// }
// //Number 3 consoled 3 times after 1 second



// (function () {
//     var a = b = 5;
// })();
// console.log(b)
// // 5  since funcion is invoked and value is assigned as 5 to global variable c
//if we console a then it gives a is not defined because we cant access "a" outside iife

// var 2fi = 5 // invalid variable declaration


// var txt = new Array("tim","kin","lkd")
// console.log(txt)  // valid array declaration


// --------------------check longest palin by two pointer approach
// let str = "racecar aa rracecarr hrm"
// let i = 0
// let j = str.length-1

// let arr = str.split(" ")
// let length = 0
// console.log(arr)

// const findLength = (str) => {
//     while(i < j){
//         if(str[i] !== str[j]){
//             palin = false
//             break
//         }
//         i++
//         j--
//     }
// }

// for(let i= 0; i < arr.length; i++){
//     let palin = true
//     findLength(arr[i])
//     if(palin){
//         if(arr[i].length > length){
//             length = arr[i].length
//         }
//     }
// }
// console.log(length)

// ---------------------find largest peak of mountain  by two pointer


// let arr = [1,2,5,1,4,6,7,9,1,2]

// // [1,4,6,7,9,1]
// let max = Math.max(...arr)
// // console.log(max)
// let index = arr.indexOf(max)

// let before = []
// let after = []

// let i = index-1
// let j = index+1

// while(arr[i+1] > arr[i]){
//     before.unshift(arr[i])
//     i--
// }
// while(arr[j-1] > arr[j]){
//     after.push(arr[j])
//     j++
// }
// console.log([...before, arr[index], ...after])


//----------- Binary search find number and their lower or upper bounds

// let arr = [1,2,2,2,5,7,9,11]

// let i = 0
// let j = arr.length-1

// while(i <= j){
//     let mid = Math.floor((i+j)/2)
//     if(arr[mid] === 2){             
//         if(arr[mid-1] === arr[mid]){     // mid-1 for lower bound & mid+1 for upper bound
//             j = mid-1                    // mid-1 for lower bound & mid+1 for upper bound
//         }else {
//             console.log(mid)
//             break
//         }
//     }
//     if(arr[mid] > 2){
//         j = mid
//     }
//     if(arr[mid] < 2){
//         i = mid
//     }
// }

//-----------find longest subarray of given sum (k)---------------------------
//---sliding window-----------
// let arr = [4,1,0,1,1,1,1]
// let k = 6        // given sum
// let sum = 0
// let max = 0
// let i=0
// let j=0
// while(j < arr.length){
//     sum = sum + arr[j]

//     if(sum < k){
//         j++
//     } else if(sum == k){
//        if ( j-i+1 > max){       //j-i+1 is window.
//            max = j-i+1
//        }
//        j++                  // after getting window we are again checking forward to see if there any other window is present or not.
//     }

//     if(sum > k){
//         while(sum > k){         // if sum > given value then we start reducing from back (i) till we get sum < k
//             sum = sum - arr[i]
//             i++
//         }
//         j++
//     }
// }
// console.log(max)


// find largest multiplication of pair of length k (sliding window)----------------------
// let arr = [1,2,4,9,1,11,0]      //9,1,11 =? 99
// let k = 3       // given length of pair
// let i = 0
// let j = 0
// let mul = 1
// let max = 0
// while(j<arr.length){
//     mul = mul * arr[j]

//     if(j-i+1 < k){
//         j++
//     } 

//     }
// }
// console.log(max)