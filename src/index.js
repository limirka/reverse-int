module.exports = function reverse (n) {
    n =  Math.abs(n)
    n = String(n)
    console.log(n);
    let revNum = ""
    for(let i = n.length - 1; i >= 0; i--){
        revNum += n[i]
    }
    return parseInt(revNum)
}

