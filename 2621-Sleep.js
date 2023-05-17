/* Given a positive integer `ms`, write an asynchronous
function that sleeps for `ms` milliseconds.
It can resolve any value. */

/**
 * @param {number} ms
 */
async function sleep(ms) {
  return new Promise((resolve, _) => {
    const timer = setTimeout(() => {
      resolve();
      clearTimeout(timer);
    }, ms);
  });
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/
