module.exports = function reverse (n) {
    let str=Math.abs(n).toString();
    let result=''
    for (let i=0;i<str.length;i++){
        result=str[i]+result;
    }
    return Number(result)
}
