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
const readlineSync = require('readline-sync');
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
// var char = "A";
// if (char === char.toUpperCase()) {
//     console.log("The Character is Upper Case");
// } else {
//     console.log("The Character is Lower Case");
// }

// Write a js program to input the week number and print weekday.
// var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var num = parseInt(readlineSync.question("Enter Week Number :"));
// console.log("Day of the Week : ", weeks[num]);

// Write a js program to input the month number and print the number of
// days in that month.
// var months = [31, 28, 31, 30,  31, 30, 31, 31, 30, 31, 30, 31];
// var mon = parseInt(readlineSync.question("Enter Month Number : "));
// console.log("Number of Days in this Month : ", months[mon - 1])

// Write a js program to count a minimum number of notes in a given
// amount
//  var amt = parseFloat(readlineSync.question("Enter Amount : "))  ;
// var Notes = [50, 100, 500, 1000,5000];
// var cnt = 0                    ;
// for (let i = 0; i < Notes.length; i++) {            
//     while (amt >= Notes[i]) {                          
//         cnt++;       
//         amt -= Notes[i];                 
//     }                        
// }                          
// console.log("Minimum Number of Notes Required : ", cnt);

// Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var phy = parseFloat(readlineSync.question('Physics Marks : '));
// var chem = parseFloat(readlineSync.question('Chemistry Marks : '));
// var bio = parseFloat(readlineSync       .question('Biology Marks : '));
// var math = parseFloat(readlineSync.question('Mathematics Marks : '));
// var com = parseFloat(readlineSync.question('Computer Marks : '));
// var total = phy + chem + bio + math + com;
// var perc = (total / 5) * 100/100;
// if(perc >= 90){
//     console.log("Grade A");
// }else if(perc>=80){
//     console.log( "Grade B" );
// }else if(perc>=70){
//     console.log("Grade C");
// }else if(perc>=60){
//     console.log("Grade D");
// }else if(perc>=40){
//     console.log("Grade  E");
// }else{
//     console.log("Grade F");
// }

// Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Then calculate Gross Salary as follows:

// Function to calculate gross salary
// function calculateGrossSalary(basicSalary) {
//     let hra, da;

//     if (basicSalary <= 10000) {
//         hra = 0.2 * basicSalary;
//         da = 0.8 * basicSalary;
//     } else if (basicSalary <= 20000) {
//         hra = 0.25 * basicSalary;
//         da = 0.9 * basicSalary;
//     } else {
//         hra = 0.3 * basicSalary;
//         da = 0.95 * basicSalary;
//     }

//     const grossSalary = basicSalary + hra + da;
//     return grossSalary;
// }

// // Get basic salary from the user

// const basicSalary = parseFloat(readlineSync.question('Enter the basic salary: '));

// // Calculate and display gross salary
// const grossSalary = calculateGrossSalary(basicSalary);
// console.log('Gross Salary:', grossSalary);

// Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill