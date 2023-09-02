module.exports = function reverse (n) {
  

    let str = toString(n);
    let reverseStr = '';

    for (let i = str.length; i=1; i = i - 1) {
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}
