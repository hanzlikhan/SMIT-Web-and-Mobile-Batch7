// r) Check if a string is an anagram of another string.

// Anagram :  ==>   anagram is a rearranged word or phrase that uses the same letters as the original word or phrase.
//                    For example, "cinema" is an anagram of "iceman".

//                    "Listen" is an anagram of "Silent".

function isAnagram(str1,str2) {

    str1 = str1.replace(" ","").toLowerCase().split('').sort().join('');
    str2 = str2.replace(" ","").toLowerCase().split('').sort().join('');
    
    return str1 === str2;
}
let str1 = "rc t"
let str2 =  "cat"
console.log(isAnagram(str1,str2));