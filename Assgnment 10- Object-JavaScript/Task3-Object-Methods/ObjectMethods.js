// Task 3: Object Methods

// Create an object method that prints a message to the console.
// Create a method that calculates and returns a value based on object properties.

const obj = {
    printMessage : function() {
        console.log("Hi there! this is start of the Object");
    },
    calculateValue: function () {
        return this.prop1 + this.prop2;
    },
    prop1: 10,
    prop2: 20

}
obj.printMessage();
console.log(obj.calculateValue());