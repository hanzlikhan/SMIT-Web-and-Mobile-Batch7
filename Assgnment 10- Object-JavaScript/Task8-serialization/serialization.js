// Task 8: Object Serialization

// Convert an object to a JSON string using JSON.stringify().
// Parse a JSON string and convert it back to an object using JSON.parse().

const student = {
    name : "hanzla",
    rollno : 221727,
    marks : 90
}
var jsonstring = JSON.stringify(student)
console.log(jsonstring);

var jsonparse = JSON.parse(jsonstring)
console.log(jsonparse);