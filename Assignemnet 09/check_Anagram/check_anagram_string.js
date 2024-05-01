// r) Check if a string is an anagram of another string.

function isAnagram(str1,str2) {
    str1 = str1.replace(' ','').toLowerCase().split('').sort().join('');
    str2 = str2.replace(' ','').toLowerCase().split('').sort().join('');

    return str1 === str2;
}
let str1 = "act"
let str2 =  "cat"
console.log((str1,str2));