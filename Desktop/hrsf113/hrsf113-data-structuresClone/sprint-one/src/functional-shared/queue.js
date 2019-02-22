var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	
var someInstance = {
    storage: {},
    first: 0,
    last: 0,
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    if (this.last > this.first){
      var trash = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return trash;
    }
  },

  size: function() {
    return this.last - this.first;
  }

};

// var queueMethods = {
//   enqueue: function(value) {
//     this.storage[this.last] = value;
//     this.last++;
//   },


//   },

//   size: function() {
//     return this.last - this.first;
//   }

  


//   someInstance.enqueue = function(value) {
//     storage[last] = value;
//     last = last + 1 //last now becomes the last-last element of the arary;
//     return last;
//   };


//   someInstance.dequeue = function() {
//     var deletedValue = storage[first];
//     delete storage[first]
//     first = first + 1;  //the next element to be deleted would be [0 + 1]
//     return deletedValue;
//   };

 
//   someInstance.size = function() {
//     return Object.keys(storage).length;
//   };
// };
