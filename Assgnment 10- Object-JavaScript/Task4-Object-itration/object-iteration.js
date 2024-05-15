// Task 4: Object Iteration

// Iterate over the properties of an object and print their values.
// Iterate over the properties of an object and perform a specific action for each property.

const obj = {
    name: 'hanzla',
    rollno : 221727,
    marks : 80,
    subject : "programming"
}
for(let k in obj){
    console.log("properties :",obj[k]);
}