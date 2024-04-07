// 1. Write a JS code to print numbers from 1 to 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}
// 2. Write a JS code to print Even numbers in given array

const  arr = [4,6,8,9];
for (let i = 0; i < arr.length; i++) {
    let even =  arr[i] % 2 === 0;
    if (even) {
        console.log(arr[i]);
    }
}

// 3. Write a JS code to delete all occurrence of element in given array

const arr = [5,7,5,9,5,11];
const element = 5;
function removeElement(arr,element){
    while(arr.includes(element)){
        let index = arr.indexOf(element);
        arr.splice(index ,1);
    }
   return arr;
}   
console.log(removeElement(arr,element));

// 4. Write a JS code to find the power of a number using for loop

const baseNumber = 5;
const expo = 4;
let result = 1;
let i;
for (i = 1; i <= expo; i++) {
    result *= baseNumber;
}
console.log(`${baseNumber} raised to the power ${i - 1} is : ${result}`);

// 5. Write a JS code to print a pattern using for loop
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 */


for (let i = 1; i <= 8; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j + ' ';
    }
    console.log(line);
}

// 6. Write a JS code to find the no of digits in a number
function countDigits(number) {
    let digitCount = 0;
    while (number !== 0) {
        number = Math.floor(number / 10);
        digitCount++;
    }
    return digitCount;
}
let number = 12345;
let digitCount = countDigits(number);
console.log(`Number of digits in ${number}: ${digitCount}`);

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

// 8. Write a JS code to find the largest number in an array
function findLargestNum(arr){
    let max = arr[0];
    for(i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
    }
console.log(findLargestNum([9,5,7,3,2]));

// 9. Write a JS code to print the Fibonacci series for a given value of N
function fibonacii(num) {
    var n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= num; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }   
}
fibonacii(6);

// 10. Write a JS code to find duplicate values in a given array

function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
                break;
            }
        }
    }
    return duplicates;
}
const array = [1, 2, 3, 4, 5, 2, 6, 7, 8, 7];
const duplicateValues = findDuplicates(array);
console.log("Duplicate values in the array:", duplicateValues);

// 11. Write a JS code for Linear search algorithm

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const array = [5, 3, 10, 8, 2];
const targetValue = 10;
const index = linearSearch(array, targetValue);
if (index !== -1) {
    console.log(`The target ${targetValue} is found at index ${index}.`);
} else {
    console.log(`The target ${targetValue} is not found in the array.`);
}

// 12. Write a JS code for Binary search algorithm

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; 
}
const array = [2, 3, 5, 7, 8, 10, 12, 15];
const targetValue = 8;
const index = binarySearch(array, targetValue);
if (index !== -1) {
    console.log(`The target ${targetValue} is found at index ${index}.`);
} else {
    console.log(`The target ${targetValue} is not found in the array.`);
}
