const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req,res) => {
    const graphicCards = await loadGrapicCardsCollection();
    res.send(await graphicCards.find({}).toArray())
})


router.post('/', async (req, res) => {
    const graphicCards = await loadGrapicCardsCollection();
    await graphicCards.insertOne({
        graphicCardName: req.body.name,
        graphicCardPrice: req.body.price,
        graphicCardFormat: req.body.format,
        GraphicCardMemory: req.body.memory,
        GraphicCardMemoryType: req.body.memoryType,
        GraphicCardClockSpeed: req.body.clockSpeed
    })
    res.status(201).send();
})

router.delete(`/:id`, async (req, res) => {
    const graphicCards = await loadGrapicCardsCollection();
    await graphicCards.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.status(201).send();
})


async function loadGrapicCardsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Dominik:Was1ant201@postapp.osn2b.mongodb.net/postApp?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('postApp').collection('graphicCards');
}
module.exports = router;