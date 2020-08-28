const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
    // Return all pets currently up for adoption.
    try {
        const pets = Pets.get(); // Returns an object of cats and dogs arrays
        res.json(pets);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    };
});

router.delete('/', json, (req, res) => {
    // Remove a pet from adoption.
    const { type } = req.body;

    const adopted = {
        adopted: Pets.dequeue(type),
        fosterParent: People.dequeue(),
    };

    res.json(adopted);
});

module.exports = router;