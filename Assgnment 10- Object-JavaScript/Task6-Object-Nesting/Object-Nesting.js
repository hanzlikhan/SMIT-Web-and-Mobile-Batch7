// Task 6: Object Nesting

// Create an object that contains another object as one of its properties.
// Access and modify properties of a nested object.

const obj= {
    nestobj :{
        a : 5,
        b: 10
    },
    c: 25
}
obj.nestobj.a = 20
console.log(obj.nestobj.a);