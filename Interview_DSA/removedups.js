function removeDups(arr) {
  let exist = {};
  let newarr = [];
  let num;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (!exist[num]) {
      newarr.push(num);
      exist[num] = true;
    }
  }
  return newarr;
}

console.log(removeDups([1, 2, 3, 4, 5, 4, 2, 4, 2, 1, 32, 33, 1, 9]));
