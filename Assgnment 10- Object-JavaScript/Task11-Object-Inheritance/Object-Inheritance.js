// Task 11: Object Inheritance

// Create a parent object and a child object that inherits properties and methods from the parent


const parentObj= {
    parentPro: 'Parent property value',
    parentMethod: function() {
      return 'Parent method called';
    }
  }
  const childObj = Object.create(parentObj);
  childObj.childPro = 'Child property value';
  console.log(childObj.parentPro);
  console.log(childObj.parentMethod());
  console.log(childObj.childPro); 
  