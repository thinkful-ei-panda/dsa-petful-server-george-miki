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
        let cats = pets.cats.dequeue();
        if(!cats) {
            store.cats.forEach(cat => pets.cats.enqueue(cat));
            cats = pets.cats.dequeue();
        };
        return cats;
    };

    if(type === 'dogs') {
        let dogs = pets.dogs.dequeue();
        if(!dogs) {
            store.dogs.forEach(dog => pets.dogs.enqueue(dog));
            dogs = pets.dogs.dequeue();
        };
        return dogs;
    };
    
    if(type ===  'all') {
        let cats = pets.cats.dequeue();
        let dogs = pets.dogs.dequeue();
        if(!cats) {
            store.cats.forEach(cat => pets.cats.enqueue(cat));
            cats = pets.cats.dequeue();
        };
        if(!dogs) {
            store.dogs.forEach(dog => pets.dogs.enqueue(dog));
            dogs = pets.dogs.dequeue();
        };
        return {
            cats,
            dogs,
        }
    };
  },
};