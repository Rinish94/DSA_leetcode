let arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]

function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/

	let n = arr.length
  let num =0
  for (let i=0;i<n;i++){
    if(arr[i]!=0){
      arr[num++] = arr[i]
    }
    
  }
  while (num<n){
    arr[num++] =0
  }
  return arr
  
}
console.log(moveZerosToEnd(arr))
