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

    const fosterParent = People.dequeue();

    if (fosterParent == null) {
        return res.status(400).json({error: 'No foster parents in queue'});
    };

    if(type === 'cats') {
        let cats = Pets.dequeue(type);
        if (cats == null) {
            return res.status(400).json({error: 'No cats in queue'});
        };
        const adopted = {
            adopted: cats,
            fosterParent,
        };
        return res.json(adopted);
    };

    if(type === 'dogs') {
        let dogs = Pets.dequeue(type);
        if (dogs == null) {
            return res.status(400).json({error: 'No dogs in queue'});
        };
        const adopted = {
            adopted: dogs,
            fosterParent,
        };
        return res.json(adopted);
    };

    if(type === 'all') {
        const { cats, dogs } = Pets.dequeue(type);
        if (cats == null) {
            return res.status(400).json({error: 'No cats in queue'});
        };

        if (dogs == null) {
            return res.status(400).json({error: 'No dogs in queue'});
        };

        const adopted = {
            adopted: {
                cats,
                dogs
            },
            fosterParent,
        };

        return res.json(adopted);
    };
});

module.exports = router;