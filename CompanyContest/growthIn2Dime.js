function countMax(upRight) {
    let a = new Array(upRight.length).fill(0)
    let b = new Array(upRight.length).fill(0)
    
    
    for(let i=0;i<upRight.length;i++){
        let temp = upRight[i].split(' ')
        a[i] = Number(temp[0])
        b[i] = Number(temp[1])
    }
    return Math.min(...a) * Math.min(...b)

}

// 3
// 2 3
// 3 7
//4 1
