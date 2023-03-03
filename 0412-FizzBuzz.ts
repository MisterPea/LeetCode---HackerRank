//  Given an integer n, return a string array answer (1-indexed) where:
//  • answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//  • answer[i] == "Fizz" if i is divisible by 3.
//  • answer[i] == "Buzz" if i is divisible by 5.
//  • answer[i] == i (as a string) if none of the above conditions are true.
//  Solution: Loop, push, return
//  Time Complexity: O(n) where n is the size of the number to parse
//  Space Complexity: O(n) where n is the number of iterations

// There are ways of approaching this via bitwise or using the 15-step repeating pattern.

function fizzBuzz(n: number): string[] {
    const output: string[] = [];
    for (let i = 1; i < n + 1; i += 1) {
        let localOut = '';
        if (i % 3 === 0) { localOut += 'Fizz' }
        if (i % 5 === 0) { localOut += 'Buzz' }
        if (localOut.length === 0) { localOut = `${i}` }
        output.push(localOut);
    }
    return output;
};