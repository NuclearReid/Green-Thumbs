const router = require('express').Router();
const { Plant } = require('../../models');

// it's pretty basic, just creates a new entry to the Plant table
router.post('/newPlant', async (req, res) => {
    try {
        const addPlant = await Plant.create(req.body);
        res.status(200).json(addPlant);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;
