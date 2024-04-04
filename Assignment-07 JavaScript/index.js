// write a js program to find the maximum number b/w two numbers
// var a = 5;
// var b = 9;
// if(a>b){
//     console.log(`${a} is maximum`);
// }else{
//     console.log(`${b} is maximum`);
// }

// write a js program to find the maximum number b/w three numbers

// var x = 4;
// var y = 8;
// var z = 12;
// if(x > y && y > z){
//     console.log(`${x} is maximum.`);
// }
// else if(y>x && y>z){
//     console.log(`${y} is maximum.`);
// }
// else{
//     console.log(`${z} is maximum.`);
// }

// write a js program to check wheather a number is negative,positive or zero.

// var n = 7;
// if(n>0){
//     console.log(`${n} is positive.`);
// }
// else if(n==0){
//     console.log(`${n} is positive.`);
// }
// else{
//     console.log(`${n} is negative.`);
// }

// Write a js program to check whether a number is divisible by 5 and 11 or
// not

// var num = 60;
// if (num % 5 == 0 && num % 11 == 0) {
//     console.log("The number " + num + " is divisible by both 5 and 11");
// } else {
//     console.log("The number " + num + " is not divisible by both  5 and 11");
// }

// Write a js program to check whether a number is even or odd.
// var num = 9;
// if (num % 2 == 0) {
//     console.log(`${num} is even`);
// } else {
//     console.log(`${num} is odd`);
// }

// Write a js program to check whether a year is leap year or not.
// var year = 2004;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 ==  0) {
//     console.log(`${year} is a leap year`)
// } else {
//     console.log(`${year} is not a leap year`)
// }

// Write a js program to input any alphabet and check whether it is vowel or
// consonant.
// const readlineSync = require('readline-sync');
// var alphabets = readlineSync.question('Enter an alphabet: ').toLowerCase();
// switch (alphabets) {    
//     case 'a':
//         console.log('This is A');
//         break;
//     case 'e':
//         console.log('This is E');
//         break;
//     case 'i':
//         console.log('This is I');
//         break;
//     case 'o':
//         console.log('This is O');
//         break;
//     case 'u':
//         console.log('This is U');
//         break;        
//     default:
//         console.log(alphabets + ' is a Consonant')
// }

// Write a js program to check whether a character is uppercase or
// lowercase alphabet.
var char = "A";
if (char === char.toUpperCase()) {
    console.log("The Character is Upper Case");
} else {
    console.log("The Character is Lower Case");
}