const student = {
    name: 'hanzla',
    rollno: 221727,
    marks: 90,
    class: 'BSCS'
}
console.log(student);
console.log(student.name);
console.log(student['marks']);
console.log(Object.values(student));

let output = Object.keys(student).map(function(e){
    return student[e];
})
console.log(output);

// print using loop

let student2 = {
    name: "hanla",
    rollno: 221727,
    marks: 90
}
var arr = []

for(const prop in student2){
    arr.push(student2[prop])
}
console.log(arr);

//  filter method 

const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" },
    { id: 4, name: "David", grade: "B" },
    { id: 5, name: "Eve", grade: "A" }
  ];
  
  const gradeAStudents = students.filter(student => student.grade === 'A');
  
  // Output the filtered students
  console.log("Students with grade A:");
  console.log(gradeAStudents);
  

//   find method 

// Sample array of objects
const students3 = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" },
    { id: 4, name: "David", grade: "B" },
    { id: 5, name: "Eve", grade: "A" }
  ];
  
  // Using find to search for a student by name
  const student3 = student.find(student => student.name === "Charlie");
  
  // Output the found student
  if (student) {
    console.log("Found student:");
    console.log(student);
  } else {
    console.log("Student not found.");
  }
  
