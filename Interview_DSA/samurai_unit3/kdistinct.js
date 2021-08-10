function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [num, k] = input[0].trim().split(" ").map(Number);
  // console.log(num,k)
  let str = input[1].trim();
  // console.log(str)
  let ans = 0;
  obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < k; i++) {
    obj[str[i]] += 1;
    let count = 0;
    //console.log(obj);
    for (key in obj) {
      if (obj[key] === 1) {
        count++;
      }
    }
    if (count === k) {
      ans++;
    }
  }

  for (let i = k; i < num; i++) {
    obj[str[i - k]] -= 1;
    obj[str[i]] += 1;
    let count = 0;
    // console.log(obj)
    for (key in obj) {
      if (obj[key] == 1) {
        //   console.log(obj[key]);
        count++;
        //   console.log(count);
      }
    }
    if (count == k) {
      ans++;
    }
  }
  console.log(ans);
}
if (process.env.USERNAME === "Ashutosh Pandey") {
  runProgram(`4 2
    abcc`);
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
