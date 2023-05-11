/* 
Closure example:
Time complexity: O(1)
Space complexity: O(1)
*/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initVal = init;
  return {
    increment: () => init += 1,
    decrement: () => init -= 1,
    reset: () => init = initVal
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4