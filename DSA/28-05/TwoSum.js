/**
 * This function finds two numbers in an array that add up to a target value.
 * It returns the indices of these two numbers.
 * 
 * @param {number[]} nums - The array of numbers to search through.
 * @param {number} target - The target sum we want to find.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
var twoSum = function (nums, target) {
    // Create a set to store numbers we have seen so far
    const numSet = new Set();

    // Iterate over the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement number that we need to find
        const complement = target - nums[i];

        // Check if the complement number is already in the set
        if (numSet.has(complement)) {
            // If it is, find the index of the complement number in the array
            const complementIndex = nums.indexOf(complement);
            // Return the indices of the complement number and the current number
            return [complementIndex, i];
        }

        // Add the current number to the set
        numSet.add(nums[i]);
    }
    // If no two numbers add up to the target, return an empty array
    return [];
};

// Test cases
const nums1 = [2, 7, 11, 15], target1 = 9;
const nums2 = [3, 2, 4], target2 = 6;
const nums3 = [3, 3], target3 = 6;

// Logging the result of the function for the given test cases
console.log(twoSum(nums1, target1)); // Output: [0, 1]
console.log(twoSum(nums2, target2)); // Output: [1, 2]
console.log(twoSum(nums3, target3)); // Output: [0, 1]



// Explanation of the function:

//1) The function takes an array of numbers (nums) and a target sum (target) as inputs.

//2) It uses a Set (numSet) to keep track of the numbers it has seen so far.

//3) It iterates through the array of numbers. For each number (nums[i]), it calculates the complement (the number that, when added to nums[i], equals the target).

//4) It checks if the complement is already in the set. If it is, it means we've found the two numbers that add up to the target. We then return the indices of these two numbers.

//5) If the complement is not in the set, we add the current number (nums[i]) to the set and continue with the next iteration.

//6) If no two numbers add up to the target after iterating through the entire array, the function returns an empty array.