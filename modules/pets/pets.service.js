const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    return {
        cats: pets.cats.all(),
        dogs: pets.dogs.all(),
    };
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type === 'cats') {
        return pets.cats.dequeue();
    };

    return pets.dogs.dequeue();
  },
};