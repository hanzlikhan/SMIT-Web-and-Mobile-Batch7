// # Task 12: Object Privacy

// # Create private properties in an object using closures or symbols.

const createPerson = function(){
    let name = ""
    return{
    setname: function(newName){
        name = newName
    },
    getname: function(){
        return name
    }
}
}
let person = createPerson()
person.setname("hanzla")
console.log(person.getname());
console.log(person.name);
