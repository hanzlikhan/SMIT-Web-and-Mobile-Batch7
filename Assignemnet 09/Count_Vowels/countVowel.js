// d) Count the number of vowels in a string.

function countVow(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        var char = str.charAt(i); // Corrected variable name from 'index' to 'i'
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

let str = "Hello World";
console.log(countVow(str)); // Output: 3
