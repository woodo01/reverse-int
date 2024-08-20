module.exports = function reverse (number) {
    const reversedString = Math.abs(number).toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}
