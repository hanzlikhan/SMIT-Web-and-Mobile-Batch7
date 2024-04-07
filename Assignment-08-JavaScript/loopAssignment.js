// 1. Write a JS code to print numbers from 1 to 10
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
// 2. Write a JS code to print Even numbers in given array

// const  arr = [4,6,8,9];
// for (let i = 0; i < arr.length; i++) {
//     let even =  arr[i] % 2 === 0;
//     if (even) {
//         console.log(arr[i]);
//     }
// }

// 3. Write a JS code to delete all occurrence of element in given array

// const arr = [5,7,5,9,5,11];
// const element = 5;
// function removeElement(arr,element){
//     while(arr.includes(element)){
//         let index = arr.indexOf(element);
//         arr.splice(index ,1);
//     }
//    return arr;
// }   
// console.log(removeElement(arr,element));

// 4. Write a JS code to find the power of a number using for loop

// const baseNumber = 5;
// const expo = 4;
// let result = 1;
// let i;
// for (i = 1; i <= expo; i++) {
//     result *= baseNumber;
// }
// console.log(`${baseNumber} raised to the power ${i - 1} is : ${result}`);

// 5. Write a JS code to print a pattern using for loop
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 */


// for (let i = 1; i <= 8; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j + ' ';
//     }
//     console.log(line);
// }

// 6. Write a JS code to find the no of digits in a number
// function countDigits(number) {
//     let digitCount = 0;
//     while (number !== 0) {
//         number = Math.floor(number / 10);
//         digitCount++;
//     }
//     return digitCount;
// }
// let number = 12345;
// let digitCount = countDigits(number);
// console.log(`Number of digits in ${number}: ${digitCount}`);

// 7. Write a JS code to calculate the sum of digits in a number
function sumOfDigits(num) {
    let sum = 0;
    while (num != 0) {
        sum += num % 10;
        num = Math.floor(num/10);
    }
    return sum;
}
console.log("Sum of Digits: " + sumOfDigits(12345));
