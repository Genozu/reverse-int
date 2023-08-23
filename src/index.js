module.exports = function reverse (n) {
    const str = `${n}`;
    let result = '';
    let i = 0;

    while (i < str.length) {
        result = result + str[str.length - (1 + i)];
        i += 1;
    }
    return result;
}
