function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let a = input[1].trim().split(" ").map(Number);
  //    console.log(n ,a)
  let len = a.length;
  //   console.log(len)

  merge_sort(a, 0, len);
  res(a, len);

  function merge_sort(a, low, high) {
    if (low >= high) {
      return;
    }
    var mid = Math.floor(low + (high - low) / 2);
    //   console.log(mid);
    merge_sort(a, low, mid);
    merge_sort(a, mid + 1, high);
    merge(a, low, mid, high);
  }

  function merge(a, low, mid, high) {
    n1 = mid - low + 1;
    n2 = high - mid;
    // console.log(n1+"  "+n2)
    let L = new Array(n1);
    let R = new Array(n2);
    //   L[n1],R[n2]
    //   console.log(L)
    for (let i = 0; i <= n1; i++) L[i] = a[low + i];

    for (let j = 0; j <= n2; j++) R[j] = a[mid + 1 + j];

    let i = 0;
    let j = 0;
    let k = low;
    while (i < n1 && j < n2) {
      if (L[i] <= R[i]) {
        a[k] = L[i];
        i++;
      } else {
        a[k] = R[j];
        j++;
      }
      k++;
    }
    // while (i < n1) {
    //   a[k] = L[i];
    //   i++;
    //   k++;
    // }
    // while (j < n2) {
    //   a[k] = R[j];
    //   j++;
    //   k++;
    //}
  }

  function res(a, size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr += a[i] + " ";
    }
    console.log(arr);
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
  3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
