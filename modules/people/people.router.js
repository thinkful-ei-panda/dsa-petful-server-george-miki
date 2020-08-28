const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const fosterParents = People.get(); // Returns an array of people
        res.json(fosterParents);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    };
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { newFosterParentName } = req.body;

  People.enqueue(newFosterParentName);

  res.status(201).json({message: 'Successfully added'});

});

module.exports = router;
