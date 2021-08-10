function runProgram(input) {
  input = input.trim().split(/[\r+\n]+/);
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split("");
  }
  input.shift();
  for (let i = 0; i < input.length; i++) {
    // console.log(input)
    let arr = input[i + 1];
    let k = input[i + 2][0];
    // console.log(k)
    let count = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      // console.log(arr[j])
      if (arr[j] === k) {
        count += j + 1;
      }
    }
    console.log(count);
    i = i + 2;
  }
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`2
    4
    aman
    a
    5
    ianan
    a`);
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

// // public static void main(String[] args){
//   Scanner s = new Scanner(System.in);
//   int t = s.nextInt();
//   while(t--!=0){
//       int n = s.nextInt();
//       String a = s.next();
//       char k = s.next().charAt(0);
