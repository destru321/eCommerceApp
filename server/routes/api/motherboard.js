const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req,res) => {
    const motherboards = await loadMotherboardsCollection();
    res.send(await motherboards.find({}).toArray())
})


router.post('/', async (req, res) => {
    const motherboards = await loadMotherboardsCollection();
    await motherboards.insertOne({
        motherboardsName: req.body.name,
        motherboardsPrice: req.body.price,
        motherboardsFormat: req.body.format,
        motherboardsProcessorSocket: req.body.processorSocket,
        motherboardsChipset: req.body.chipset,
    })
    res.status(201).send();
})

router.delete(`/:id`, async (req, res) => {
    const motherboards = await loadMotherboardsCollection();
    await motherboards.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.status(201).send();
})


async function loadMotherboardsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Dominik:Was1ant201@postapp.osn2b.mongodb.net/postApp?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('postApp').collection('motherboards');
}
module.exports = router;