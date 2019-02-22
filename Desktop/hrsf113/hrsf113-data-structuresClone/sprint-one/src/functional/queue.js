var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0 //the first element of the array from Object.keys()
  var last = Object.keys(storage).length; //last element in the array from Object.keys()

  // Implement the methods below

  //Step 2
  //uses FIFO to add obj[key] to the back of the queue
  someInstance.enqueue = function(value) {
    storage[last] = value;
    last = last + 1 //last now becomes the last-last element of the arary;
    return last;
  };

  //Step 3
  //FIFO - delete the first out, [0]

  someInstance.dequeue = function() {
    var deletedValue = storage[first];
    delete storage[first]
    first = first + 1;  //the next element to be deleted would be [0 + 1]
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
