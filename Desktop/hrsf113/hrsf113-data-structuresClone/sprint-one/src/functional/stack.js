var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  //Step 2
  //Add a new key/value pair into the new object
  //Set someInstance.size(storage) as the key of the object
  //Adding new key into the object is object[key] = value;
  someInstance.push = function(value) {
    return storage[someInstance.size(storage)] = value;
  };

  //Step3
  //set a variable and delete the last object[key] using the someInstance.size() - 1;
  //return that variable
  someInstance.pop = function() {
    var deletedValue = storage[someInstance.size()-1];
    delete storage[someInstance.size()-1];
    return deletedValue;
    
  };

  //Step 1
  //testing for the size of the object
  //Use Object.keys to return an array of the object keys
  //invokes the storage variable and use .length method to obtain length of array
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
