// l) Check if a string contains only numeric characters.

function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("123"));    
console.log(isNumeric("abc123"));
