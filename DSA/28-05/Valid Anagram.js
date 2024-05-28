/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Check if the lengths of the two strings are different.
    // If they are, they cannot be anagrams, so return false.
    if (s.length !== t.length) {
        return false;
    }

    // Sort both strings and compare the sorted versions.

    // Split the string 's' into an array of characters,
    // sort the array, and join it back into a string.
    const sortedS = s.split('').sort().join('');

    // Split the string 't' into an array of characters,
    // sort the array, and join it back into a string.
    const sortedT = t.split('').sort().join('');

    // Compare the sorted versions of the strings.
    // If they are equal, the original strings are anagrams,
    // so return true. Otherwise, return false.
    return sortedS === sortedT;
};

// Test Cases

const s1 = "anagram", t1 = "nagaram";
const s2 = "rat", t2 = "car";

// Test the function with the first set of strings.
// "anagram" and "nagaram" are anagrams, so this should log true.
console.log(isAnagram(s1, t1));

// Test the function with the second set of strings.
// "rat" and "car" are not anagrams, so this should log false.
console.log(isAnagram(s2, t2));


// Explanation:

//1) Function Definition:
//=> The function isAnagram takes two string parameters s and t.
//=> It returns a boolean value indicating whether s and t are anagrams.

//2) Length Check:
//=> The function first checks if the lengths of s and t are different.
//=> If they are different, it immediately returns false because strings of different lengths cannot be anagrams.

//3) Sorting and Comparison:
//=> The function splits each string into an array of characters, sorts the arrays, and joins them back into strings.
//=> It then compares these sorted strings. If they are equal, the original strings are anagrams.

//4) Test Cases:
//=> The code tests the function with two pairs of strings: ("anagram", "nagaram") and ("rat", "car").
//=> The expected results are true and false, respectively.