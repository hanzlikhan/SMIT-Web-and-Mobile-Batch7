// Check if a string is a valid palindrome permutation (ignoring spaces).

// palindrome ==> a word or phrase that is same forward and backward.
// permutation ==> a rearrangement of letters.

// palindrome permutation ==> a word or phrase that is a palindrome with rearrangement of the letters.

function isValidPalindromePermutation(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s/g, '').toLowerCase();
    
    // Count the frequency of each character
    const charCount = new Map();
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Count the number of characters with odd frequency
    let oddCount = 0;
    for (let count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    
    // A palindrome permutation can have at most one character with odd frequency
    return oddCount <= 1;
}
const testString = "Tact Coa";
if (isValidPalindromePermutation(testString)) {
    console.log("The string is a valid palindrome permutation.");
} else {
    console.log("The string is not a valid palindrome permutation.");
}
