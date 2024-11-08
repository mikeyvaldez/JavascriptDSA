// MAX VALUE

// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.



const maxValue = (nums) => {

    let maxNum = -Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > maxNum){
            maxNum = nums[i];
        }
    }
    return maxNum;

}



console.log(maxValue([4, 7, 2, 8, 10, 9])); // -> 10
console.log(maxValue([10, 5, 40, 40.3])); // -> 40.3
console.log(maxValue([-5, -2, -1, -11])); // -> -1
console.log(maxValue([42])); // -> 42
console.log(maxValue([1000, 8])); // -> 1000
console.log(maxValue([1000, 8, 9000])); // -> 9000
console.log(maxValue([2, 5, 1, 1, 4])); // -> 5
