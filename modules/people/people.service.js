const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    try {
        const fosterParents = people.all(); // Returns an array of people
        return fosterParents;
    }
    catch(error) {
        store.people.forEach(person => people.enqueue(person));
        const fosterParents = people.all();
        return fosterParents;
    };
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
  },

  dequeue() {
    // Remove a person from the queue.
    return people.dequeue();
  },
};
