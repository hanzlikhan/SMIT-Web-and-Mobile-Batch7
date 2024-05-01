// o) Convert a string into title case (the first letter of each word capitalized).

function toTitleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 1) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        } else {
            words[i] = words[i].toLowerCase();
        }
    }
    return words.join(' ');
}
console.log(toTitleCase("hello world")); 
console.log(toTitleCase("this is a test")); 
console.log(toTitleCase("HELLO")); 

