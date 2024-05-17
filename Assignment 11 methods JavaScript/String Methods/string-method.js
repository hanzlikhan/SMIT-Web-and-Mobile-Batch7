//   string mehtods 

var str = "muhammadhanzlaGormani"
var str2 = "I am hanzla"

//  find length of string
console.log(str.length)

//  find  substring
console.log(str.indexOf("hanzla"))

// find last occurance of string
console.log(str.lastIndexOf("hanzla"))

// cut out the substring 
// use of slice method 

var cut = str.slice(8,14)
console.log(cut);

// find and replace the string

console.log("hanzla","faiz");

// convert to the upper case of the string
console.log(str.toUpperCase())
// convert to the lover case of the string

console.log(str.toLowerCase());

// concat method 
var combine = str.concat(str,str2)
console.log(combine);

// find index of character in th string 
console.log(str.indexOf("h"))

// unsafe code 

console.log(str[2]);

// find character code

console.log(str.charCodeAt(5));

// split a string on commas 

console.log(str.split(","));
console.log(str2.split(""));

// number to hex(16) , octal or binary

console.log(str.toString(16));