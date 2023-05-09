// Given an array of integers, where all elements but one occur twice, find the unique element.
// Example:
// a = [1,2,3,4,3,2,1]
// The unique element is: 4
// We're guaranteed only 1 int/solution per array 

function lonelyInteger(a) {
  const ints = {};
  for(let i of a){
      if(ints[i]){
          ints[i] +=1
      } else {
          ints[i] = 1
      }
  }
  return Object.keys(ints).find((key) => ints[key] === 1);
}