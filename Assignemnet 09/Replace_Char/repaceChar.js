// i) Replace all occurrences of a given character in a string with another character.

function replChar(str,char,newChar) {
    return str.replace(char, newChar)
}

var str = "Hello World";
var char = "H";
var newChar = "N";  
var newStr = replChar(str,char,newChar);
console.log(newStr);