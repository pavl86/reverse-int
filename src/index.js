module.exports = function reverse (n) {
    n < 0 ? n = n * (-1) : n = n * 1;
  return +String(n).split('').reverse().join('');
};
