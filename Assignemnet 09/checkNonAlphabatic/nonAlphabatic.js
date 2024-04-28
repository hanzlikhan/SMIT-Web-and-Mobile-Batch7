// p) Remove all non-alphabetic characters from a string.

function removeNonAlphabetic(str) {
    return str.replace(/[^a-z]/gi, '');
}

// Example usage:
console.log(removeNonAlphabetic("Hello123World!")); 
console.log(removeNonAlphabetic("12345"));
console.log(removeNonAlphabetic("This is a test.")); 
