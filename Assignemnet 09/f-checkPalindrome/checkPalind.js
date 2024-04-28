// f) Check if a string is a palindrome.
// =>  Palindrome --> A palindrome is a word, phrase,
//     number, or other sequence of characters that 
//     reads the same forward and backward.
//      "radar", "man" , racecar

function checkPal(str) {
    if (str == str.split("").reverse().join("")) {
        return "this string is Palindrome"
    }
    else {
        return "Not Palindrome"
    }
}
var str = "racecar"
console.log(checkPal(str));