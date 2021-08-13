function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b -a;
    a = a+ b;
    b = a-b;
    console.log('after swap: ','a: ', a, 'b: ', b);  
  }

//   console.log(swapNumb(10,20))
swapNumb(10,20)