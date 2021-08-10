function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let values = input[1].trim().split(" ");
//   console.log(values)
  let sortval = quicksort(values);

  console.log(sortval);
  function quicksort(original_array) {
    so_ar = original_array.slice();
    // console.log(so_ar)

    function swap(i, j) {
      let temp = so_ar[i];
      so_ar[i] = so_ar[j];
      so_ar[j] = temp;
    }

    function partition(start, end) {
      let pivot = so_ar[start];
      let ind = start + 1;
      for (let i = start + 1; i <= end; i++) {
        if (so_ar[i] < pivot) {
          swap(i, ind);
          ind++;
        }
      }
      swap(start, ind - 1);
      return ind - 1;
    }

    function so_part(start, end) {
      if (end > start) {
        let pivotIndex = partition(start, end);
        so_part(start, pivotIndex - 1);
        so_part(pivotIndex + 1, end);
      }
    }

    so_part(0, so_ar.length - 1);
    return so_ar.reverse().join(" ");
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`5
    2 3 1 4 11`);
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
