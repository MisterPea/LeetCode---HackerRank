/* 
Given an array of integers arr, return true if the number of
occurrences of each value in the array is unique or false otherwise.
Solution: Keep track of the number of times a value comes up;
then compare the lengths of the resultant Object and the Set of Object values.
If the lengths match, then there is a unique number of occurrences, because
every value for every key would be unique. If it were false, then 2 or
more values would be the same, and the Set of values would be shorter than
the length of the hash Object.

Runtime Complexity: O(n) We iterate over the array and constant-time insert into the Object
Space Complexity: O(n) We're storing the length of the hashValues
*/

function uniqueOccurrences(arr: number[]): boolean {
    const hash = {};
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] in hash) {
            hash[arr[i]] += 1;
        } else {
            hash[arr[i]] = 1;
        }
    }
    const hashValues = Object.values(hash);
    return hashValues.length === new Set(hashValues).size;
};