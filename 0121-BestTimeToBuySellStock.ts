//  You are given an array prices where prices[i] is the price of a given stock on the ith day.
//  You want to maximize your profit by choosing a single day to buy one stock and choosing a
//  different day in the future to sell that stock.
//  
//  Return the maximum profit you can achieve from this transaction.
//  If you cannot achieve any profit, return 0.
//  Solution: Keep track of min, max of price, while keeping track of profit (max-min)
//  If a new low is found, then we also reset the high, because we want to measure profit
//  from that new low.

//  Time Complexity: O(n) Where n is the number of days/prices
//  Space Complexity: O(1) We're using constant space regardless of the number of days

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let currMax:number = -Infinity;
    let currMin:number = Infinity;
    for(const price of prices){
        if(price > currMax) {
            currMax = price
        }
        if(price < currMin){
            currMax = price;
            currMin = price;
        }
        maxProfit = Math.max(maxProfit, currMax - currMin);
    }
    return maxProfit;
};