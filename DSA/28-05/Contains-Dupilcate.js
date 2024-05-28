var containsDuplicate = function (nums) {
    // Create a new Set to store unique numbers
    let uniqueSet = new Set();

    // Loop through each number in the array nums
    for (let num of nums) {
        // Check if the number is already in the Set
        if (uniqueSet.has(num)) {
            // If it is, return true indicating a duplicate is found
            return true;
        }

        // Add the number to the Set
        uniqueSet.add(num);
    }
    // If no duplicates were found, return false
    return false;
}

// Define arrays of numbers to test the function
const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

// Call the function containsDuplicate with the test arrays
// and log the results to the console
console.log(containsDuplicate(nums1));  // Prints true because nums1 contains duplicates
console.log(containsDuplicate(nums2));  // Prints false because nums2 does not contain duplicates
console.log(containsDuplicate(nums3));  // Prints true because nums3 contains duplicates


// Explanation:

//1) Function Definition:
// The function containsDuplicate now accepts an array nums as a parameter.

//2) Set Initialization:
// A Set named uniqueSet is created to store unique numbers from the array. A Set automatically removes duplicate values.

//3) Loop Through Array:
// The for loop iterates over each number in the array nums.
// let num of nums iterates through each element in nums.

//4) Duplicate Check:
// For each number, the function checks if the number is already in uniqueSet using the has method.
// If uniqueSet contains the number, it means a duplicate is found, and the function returns true.

//5) Add to Set:
// If the number is not already in uniqueSet, it is added to the set using the add method.

//6) Return False if No Duplicates:
// If the loop completes without finding any duplicates, the function returns false.

// 7)Test the Function:
//=> The arrays nums1, nums2, and nums3 are defined to test the function.
//=> The function is called with each test array, and the results are logged to the console:

//--> nums1 contains duplicates (1), so it prints true.
//--> nums2 does not contain duplicates, so it prints false.
//--> nums3 contains duplicates (1, 3, 4, 2), so it prints true.