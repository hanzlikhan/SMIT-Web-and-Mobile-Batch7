// ask 9: Object Destructuring

// Use object destructuring to extract specific properties from an object.

const student = {
    namef : "hanzla",
    rollno: 221727,
    cgpa : 3.7
}
const {namef,rollno,cgpa} = student
console.log(namef);
console.log(rollno);
console.log(cgpa);