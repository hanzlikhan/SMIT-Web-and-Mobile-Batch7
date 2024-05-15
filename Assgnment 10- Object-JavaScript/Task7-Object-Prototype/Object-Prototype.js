// Task 7: Object Prototypes

// Create a prototype object and use it to create multiple instances of objects.
// Add a method to the prototype object and observe its effect on the instances.

const student = {
    display : function(){
        return `hi,my name is ${this.name} and age is ${this.age}`
    }
}
const student1 = Object.create(student)
student1.name = "hanzla"
student1.age = 20
const student2 = Object.create(student)
student2.name = "Irfan"
student2.age = "22"

student.changename = function(newName){
    this.name = newName
}
student1.changename("ayaz") 
console.log(student1.display());
console.log(student2.display());