// t) Perform string compression by replacing repeated characters with the character followed by the count.
function compressString(str) {
    let compressedStr = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // If the current character is the same as the next one, increment count
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // If the current character is different, append to the compressed string
            compressedStr += str[i] + count;
            count = 1; // Reset count for the next character
        }
    }

    // Return the original string if the compressed string is not shorter
    return compressedStr.length < str.length ? compressedStr : str;
}

// Test the function
const inputString = "aabcccccaaa";
console.log(compressString(inputString)); // Output: "a2b1c5a3"
