// Task 5: Object Comparison

// Compare two objects to check if they have the same properties and values.
// Compare two objects to check if they refer to the same object in memory.

const obj1 = {
    name : "hanzla",
    rollno : 221727,
    cgpa : 3.7
}
const obj2 = {
    name : "hanzla",
    rollno : 221727,
    cgpa : 3.7
}
// check the whole keys and values
if ((Object.values(obj1)) == (Object.values(obj2))){
    console.log("Objects are equal")
} // here run else statement because arrays are compared by reference
else{
    console.log("Objects are not equal")
}

if (JSON.stringify(Object.values(obj1)) == JSON.stringify(Object.values(obj2))){
    console.log("Objects are equal")
} // here compare string and return true
else{
    console.log("Objects are not equal")
}


