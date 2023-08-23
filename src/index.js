module.exports = function reverse (n) {
    let str = `${n}`;
    let result = '';
    let i = 0;
  
    if (str[0] === '-') {
      str = str.slice(1);
    }
    
    while (i < str.length) {
      result = result + str[str.length - (1 + i)];
      i += 1;
    }
  
    return result;
}
