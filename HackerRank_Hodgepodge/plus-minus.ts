/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with 6 places after the decimal.
*/

function plusMinus(arr: number[]): void {
    const collector = { "lt": 0, "zero": 0, "gt": 0 };
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < 0) {
            collector['lt'] += 1;
        }
        else if (arr[i] > 0) {
            collector['gt'] += 1;
        }
        else {
            collector['zero'] += 1;
        }
    }
    const len = arr.length;
    const lt_out: string = (collector['lt'] / len).toFixed(6);
    const gt_out: string = (collector['gt'] / len).toFixed(6);
    const zr_out: string = (collector['zero'] / len).toFixed(6);
    console.log(gt_out);
    console.log(lt_out);
    console.log(zr_out);
}