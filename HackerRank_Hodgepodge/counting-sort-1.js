/*
Count instances of a number. Return an array of those instances 
for arr = [1,1,2,4,3,3] would equal:
        num = 0 1 2 3 4
finalArray = [0,2,1,2,1]
*/
function countingSort(arr) {
  const counter = {}
  // prepare the counter b/c we have to return 100 elements
  for (let i = 0; i < 100; i += 1) {
      counter[i] = 0
  }

  for (let j = 0; j < arr.length; j += 1) {
      counter[arr[j]] += 1;
  }
  return Object.values(counter)
}