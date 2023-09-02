module.exports = function reverse (n) {
  
    n = Math.abs(n);

    let str = String(n);
    let reverseStr = '';

    for (let i = str.length-1; i>=0; i--) {        
        reverseStr = reverseStr + str[i];
    }
    return Number(reverseStr);
}
