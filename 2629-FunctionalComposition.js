/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

var compose = function (functions) {
  if (!functions.length) {
    return function (x) { return x; };
  }

  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

var compose_v2 = function (functions) {
  if (!functions.length) {
    return function (x) { return x; };
  }

  return function (x) {
    let result = x;
    // this is essentially reduceRight
    for (let i = functions.length - 1; i >= 0; i -= 1) {
      result = functions[i](result);
    }
    return result;
  };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x], x = 4;
const fn = compose(functions);
console.log(fn(3));