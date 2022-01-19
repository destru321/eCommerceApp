const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//All processors API endpoints

router.get('/', async (req,res) => {
    const processors = await loadProcessorsCollection();
    res.send(await processors.find({}).toArray())
})


router.post('/', async (req, res) => {
    const processors = await loadProcessorsCollection();
    await processors.insertOne({
        processorName: req.body.name,
        processorPrice: req.body.price,
        processorClocking: req.body.clocking,
        processorSeries: req.body.series,
        processorCache: req.body.cache,
        processorSocket: req.body.socket
    })
    res.status(201).send();
})

router.delete(`/:id`, async (req, res) => {
    const processors = await loadProcessorsCollection();
    await processors.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.status(201).send();
})

// Processors by series endpoints

function gettingProcessorBySeries(endpoint, series) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: `${series}`}).toArray());
    })
}

gettingProcessorBySeries('intelCoreI9', 'Intel Core i9');
gettingProcessorBySeries('intelCoreI7', 'Intel Core i7');
gettingProcessorBySeries('intelCoreI5', 'Intel Core i5');
gettingProcessorBySeries('intelCoreI3', 'Intel Core i3');
gettingProcessorBySeries('intelPentium', 'Intel Pentium');
gettingProcessorBySeries('intelCeleron', 'Intel Celeron');
gettingProcessorBySeries('amdThreadripper', 'AMD Threadripper');
gettingProcessorBySeries('amdRyzen9', 'AMD Ryzen 9');
gettingProcessorBySeries('amdRyzen7', 'AMD Ryzen 7');
gettingProcessorBySeries('amdRyzen5', 'AMD Ryzen 5');
gettingProcessorBySeries('amdRyzen3', 'AMD Ryzen 3');

// Processor by series and socket

function gettingProcessorBySeriesAndSocket(endpoint, series, socket) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket}).toArray());
    })
}

gettingProcessorBySeriesAndSocket('intelCoreI9socket1151', 'Intel Core i9', 'Socket 1151');
gettingProcessorBySeriesAndSocket('intelCoreI7socket1151', 'Intel Core i7', 'Socket 1151');
gettingProcessorBySeriesAndSocket('intelCoreI5socket1151', 'Intel Core i5', 'Socket 1151');
gettingProcessorBySeriesAndSocket('intelCoreI3socket1151', 'Intel Core i3', 'Socket 1151');
gettingProcessorBySeriesAndSocket('intelPentiumsocket1151', 'Intel Pentium', 'Socket 1151');
gettingProcessorBySeriesAndSocket('intelCeleronsocket1151', 'Intel Celeron', 'Socket 1151');
gettingProcessorBySeriesAndSocket('amdThreadrippersocket1151', 'AMD Threadripper', 'Socket 1151');
gettingProcessorBySeriesAndSocket('amdRyzen9socket1151', 'AMD Ryzen 9', 'Socket 1151');
gettingProcessorBySeriesAndSocket('amdRyzen7socket1151', 'AMD Ryzen 7', 'Socket 1151');
gettingProcessorBySeriesAndSocket('amdRyzen5socket1151', 'AMD Ryzen 5', 'Socket 1151');
gettingProcessorBySeriesAndSocket('amdRyzen3socket1151', 'AMD Ryzen 3', 'Socket 1151');


gettingProcessorBySeriesAndSocket('intelCoreI9socket1151IntelCore8generatiocCoffeLake', 'Intel Core i9', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('intelCoreI7socket1151IntelCore8generatiocCoffeLake', 'Intel Core i7', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('intelCoreI5socket1151IntelCore8generatiocCoffeLake', 'Intel Core i5', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('intelCoreI3socket1151IntelCore8generatiocCoffeLake', 'Intel Core i3', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('intelPentiumsocket1151IntelCore8generatiocCoffeLake', 'Intel Pentium', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('intelCeleronsocket1151IntelCore8generatiocCoffeLake', 'Intel Celeron', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('amdThreadrippersocket1151IntelCore8generatiocCoffeLake', 'AMD Threadripper', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('amdRyzen9socket1151IntelCore8generatiocCoffeLake', 'AMD Ryzen 9', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('amdRyzen7socket1151IntelCore8generatiocCoffeLake', 'AMD Ryzen 7', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('amdRyzen5socket1151IntelCore8generatiocCoffeLake', 'AMD Ryzen 5', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');
gettingProcessorBySeriesAndSocket('amdRyzen3socket1151IntelCore8generatiocCoffeLake', 'AMD Ryzen 3', 'intelCoreI9socket1151IntelCore8generatiocCoffeLake');

gettingProcessorBySeriesAndSocket('intelCoreI9socket1200', 'Intel Core i9', 'Socket 1200');
gettingProcessorBySeriesAndSocket('intelCoreI7socket1200', 'Intel Core i7', 'Socket 1200');
gettingProcessorBySeriesAndSocket('intelCoreI5socket1200', 'Intel Core i5', 'Socket 1200');
gettingProcessorBySeriesAndSocket('intelCoreI3socket1200', 'Intel Core i3', 'Socket 1200');
gettingProcessorBySeriesAndSocket('intelPentiumsocket1200', 'Intel Pentium', 'Socket 1200');
gettingProcessorBySeriesAndSocket('intelCeleronsocket1200', 'Intel Celeron', 'Socket 1200');
gettingProcessorBySeriesAndSocket('amdThreadrippersocket1200', 'AMD Threadripper', 'Socket 1200');
gettingProcessorBySeriesAndSocket('amdRyzen9socket1200', 'AMD Ryzen 9', 'Socket 1200');
gettingProcessorBySeriesAndSocket('amdRyzen7socket1200', 'AMD Ryzen 7', 'Socket 1200');
gettingProcessorBySeriesAndSocket('amdRyzen5socket1200', 'AMD Ryzen 5', 'Socket 1200');
gettingProcessorBySeriesAndSocket('amdRyzen3socket1200', 'AMD Ryzen 3', 'Socket 1200');

gettingProcessorBySeriesAndSocket('intelCoreI9socket2066', 'Intel Core i9', 'Socket 2066');
gettingProcessorBySeriesAndSocket('intelCoreI7socket2066', 'Intel Core i7', 'Socket 2066');
gettingProcessorBySeriesAndSocket('intelCoreI5socket2066', 'Intel Core i5', 'Socket 2066');
gettingProcessorBySeriesAndSocket('intelCoreI3socket2066', 'Intel Core i3', 'Socket 2066');
gettingProcessorBySeriesAndSocket('intelPentiumsocket2066', 'Intel Pentium', 'Socket 2066');
gettingProcessorBySeriesAndSocket('intelCeleronsocket2066', 'Intel Celeron', 'Socket 2066');
gettingProcessorBySeriesAndSocket('amdThreadrippersocket2066', 'AMD Threadripper', 'Socket 2066');
gettingProcessorBySeriesAndSocket('amdRyzen9socket2066', 'AMD Ryzen 9', 'Socket 2066');
gettingProcessorBySeriesAndSocket('amdRyzen7socket2066', 'AMD Ryzen 7', 'Socket 2066');
gettingProcessorBySeriesAndSocket('amdRyzen5socket2066', 'AMD Ryzen 5', 'Socket 2066');
gettingProcessorBySeriesAndSocket('amdRyzen3socket2066', 'AMD Ryzen 3', 'Socket 2066');

gettingProcessorBySeriesAndSocket('intelCoreI9socketAm4', 'Intel Core i9', 'Socket AM4');
gettingProcessorBySeriesAndSocket('intelCoreI7socketAm4', 'Intel Core i7', 'Socket AM4');
gettingProcessorBySeriesAndSocket('intelCoreI5socketAm4', 'Intel Core i5', 'Socket AM4');
gettingProcessorBySeriesAndSocket('intelCoreI3socketAm4', 'Intel Core i3', 'Socket AM4');
gettingProcessorBySeriesAndSocket('intelPentiumsocketAm4', 'Intel Pentium', 'Socket AM4');
gettingProcessorBySeriesAndSocket('intelCeleronsocketAm4', 'Intel Celeron', 'Socket AM4');
gettingProcessorBySeriesAndSocket('amdThreadrippersocketAm4', 'AMD Threadripper', 'Socket AM4');
gettingProcessorBySeriesAndSocket('amdRyzen9socketAm4', 'AMD Ryzen 9', 'Socket AmM');
gettingProcessorBySeriesAndSocket('amdRyzen7socketAm4', 'AMD Ryzen 7', 'Socket AM4');
gettingProcessorBySeriesAndSocket('amdRyzen5socketAm4', 'AMD Ryzen 5', 'Socket AM4');
gettingProcessorBySeriesAndSocket('amdRyzen3socketAm4', 'AMD Ryzen 3', 'Socket AM4');

gettingProcessorBySeriesAndSocket('intelCoreI9socketsTrx4', 'Intel Core i9', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('intelCoreI7socketsTrx4', 'Intel Core i7', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('intelCoreI5socketsTrx4', 'Intel Core i5', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('intelCoreI3socketsTrx4', 'Intel Core i3', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('intelPentiumsocketsTrx4', 'Intel Pentium', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('intelCeleronsocketsTrx4', 'Intel Celeron', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('amdThreadrippersocketsTrx4', 'AMD Threadripper', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('amdRyzen9socketsTrx4', 'AMD Ryzen 9', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('amdRyzen7socketsTrx4', 'AMD Ryzen 7', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('amdRyzen5socketsTrx4', 'AMD Ryzen 5', 'Socket sTRX4');
gettingProcessorBySeriesAndSocket('amdRyzen3socketsTrx4', 'AMD Ryzen 3', 'Socket sTRX4');

gettingProcessorBySeriesAndSocket('intelCoreI9socketsWrxb', 'Intel Core i9', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('intelCoreI7socketsWrxb', 'Intel Core i7', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('intelCoreI5socketsWrxb', 'Intel Core i5', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('intelCoreI3socketsWrxb', 'Intel Core i3', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('intelPentiumsocketsWrxb', 'Intel Pentium', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('intelCeleronsocketsWrxb', 'Intel Celeron', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('amdThreadrippersocketsWrxb', 'AMD Threadripper', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('amdRyzen9socketsWrxb', 'AMD Ryzen 9', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('amdRyzen7socketsWrxb', 'AMD Ryzen 7', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('amdRyzen5socketsWrxb', 'AMD Ryzen 5', 'Socket sWRXB');
gettingProcessorBySeriesAndSocket('amdRyzen3socketsWrxb', 'AMD Ryzen 3', 'Socket sWRXB');

gettingProcessorBySeriesAndSocket('intelCoreI9socket1700', 'Intel Core i9', 'Socket 1700');
gettingProcessorBySeriesAndSocket('intelCoreI7socket1700', 'Intel Core i7', 'Socket 1700');
gettingProcessorBySeriesAndSocket('intelCoreI5socket1700', 'Intel Core i5', 'Socket 1700');
gettingProcessorBySeriesAndSocket('intelCoreI3socket1700', 'Intel Core i3', 'Socket 1700');
gettingProcessorBySeriesAndSocket('intelPentiumsocket1700', 'Intel Pentium', 'Socket 1700');
gettingProcessorBySeriesAndSocket('intelCeleronsocket1700', 'Intel Celeron', 'Socket 1700');
gettingProcessorBySeriesAndSocket('amdThreadrippersocket1700', 'AMD Threadripper', 'Socket 1700');
gettingProcessorBySeriesAndSocket('amdRyzen9socket1700', 'AMD Ryzen 9', 'Socket 1700');
gettingProcessorBySeriesAndSocket('amdRyzen7socket1700', 'AMD Ryzen 7', 'Socket 1700');
gettingProcessorBySeriesAndSocket('amdRyzen5socket1700', 'AMD Ryzen 5', 'Socket 1700');
gettingProcessorBySeriesAndSocket('amdRyzen3socket1700', 'AMD Ryzen 3', 'Socket 1700');

// Processor by series and cache

function gettingProcessorBySeriesAndCache(endpoint, series, cache) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: cache}).toArray());
    })
}

gettingProcessorBySeriesAndCache('intelCoreI9cache2MB', 'Intel Core i9', '2MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache2MB', 'Intel Core i7', '2MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache2MB', 'Intel Core i5', '2MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache2MB', 'Intel Core i3', '2MB');
gettingProcessorBySeriesAndCache('intelPentiumcache2MB', 'Intel Pentium', '2MB');
gettingProcessorBySeriesAndCache('intelCeleroncache2MB', 'Intel Celeron', '2MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache2MB', 'AMD Threadripper', '2MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache2MB', 'AMD Ryzen 9', '2MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache2MB', 'AMD Ryzen 7', '2MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache2MB', 'AMD Ryzen 5', '2MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache2MB', 'AMD Ryzen 3', '2MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache4MB', 'Intel Core i9', '4MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache4MB', 'Intel Core i7', '4MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache4MB', 'Intel Core i5', '4MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache4MB', 'Intel Core i3', '4MB');
gettingProcessorBySeriesAndCache('intelPentiumcache4MB', 'Intel Pentium', '4MB');
gettingProcessorBySeriesAndCache('intelCeleroncache4MB', 'Intel Celeron', '4MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache4MB', 'AMD Threadripper', '4MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache4MB', 'AMD Ryzen 9', '4MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache4MB', 'AMD Ryzen 7', '4MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache4MB', 'AMD Ryzen 5', '4MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache4MB', 'AMD Ryzen 3', '4MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache5MB', 'Intel Core i9', '5MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache5MB', 'Intel Core i7', '5MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache5MB', 'Intel Core i5', '5MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache5MB', 'Intel Core i3', '5MB');
gettingProcessorBySeriesAndCache('intelPentiumcache5MB', 'Intel Pentium', '5MB');
gettingProcessorBySeriesAndCache('intelCeleroncache5MB', 'Intel Celeron', '5MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache5MB', 'AMD Threadripper', '5MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache5MB', 'AMD Ryzen 9', '5MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache5MB', 'AMD Ryzen 7', '5MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache5MB', 'AMD Ryzen 5', '5MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache5MB', 'AMD Ryzen 3', '5MB');

gettingProcessorBySeriesAndCache('intelCoreI7cache6MB', 'Intel Core i7', '6MB');
gettingProcessorBySeriesAndCache('intelCoreI9cache6MB', 'Intel Core i9', '6MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache6MB', 'Intel Core i5', '6MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache6MB', 'Intel Core i3', '6MB');
gettingProcessorBySeriesAndCache('intelPentiumcache6MB', 'Intel Pentium', '6MB');
gettingProcessorBySeriesAndCache('intelCeleroncache6MB', 'Intel Celeron', '6MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache6MB', 'AMD Threadripper', '6MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache6MB', 'AMD Ryzen 9', '6MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache6MB', 'AMD Ryzen 7', '6MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache6MB', 'AMD Ryzen 5', '6MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache6MB', 'AMD Ryzen 3', '6MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache8MB', 'Intel Core i9', '8MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache8MB', 'Intel Core i7', '8MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache8MB', 'Intel Core i5', '8MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache8MB', 'Intel Core i3', '8MB');
gettingProcessorBySeriesAndCache('intelPentiumcache8MB', 'Intel Pentium', '8MB');
gettingProcessorBySeriesAndCache('intelCeleroncache8MB', 'Intel Celeron', '8MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache8MB', 'AMD Threadripper', '8MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache8MB', 'AMD Ryzen 9', '8MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache8MB', 'AMD Ryzen 7', '8MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache8MB', 'AMD Ryzen 5', '8MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache8MB', 'AMD Ryzen 3', '8MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache9MB', 'Intel Core i9', '9MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache9MB', 'Intel Core i7', '9MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache9MB', 'Intel Core i5', '9MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache9MB', 'Intel Core i3', '9MB');
gettingProcessorBySeriesAndCache('intelPentiumcache9MB', 'Intel Pentium', '9MB');
gettingProcessorBySeriesAndCache('intelCeleroncache9MB', 'Intel Celeron', '9MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache9MB', 'AMD Threadripper', '9MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache9MB', 'AMD Ryzen 9', '9MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache9MB', 'AMD Ryzen 7', '9MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache9MB', 'AMD Ryzen 5', '9MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache9MB', 'AMD Ryzen 3', '9MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache10MB', 'Intel Core i9', '10MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache10MB', 'Intel Core i7', '10MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache10MB', 'Intel Core i5', '10MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache10MB', 'Intel Core i3', '10MB');
gettingProcessorBySeriesAndCache('intelPentiumcache10MB', 'Intel Pentium', '10MB');
gettingProcessorBySeriesAndCache('intelCeleroncache10MB', 'Intel Celeron', '10MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache10MB', 'AMD Threadripper', '10MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache10MB', 'AMD Ryzen 9', '10MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache10MB', 'AMD Ryzen 7', '10MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache10MB', 'AMD Ryzen 5', '10MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache10MB', 'AMD Ryzen 3', '10MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache12MB', 'Intel Core i9', '12MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache12MB', 'Intel Core i7', '12MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache12MB', 'Intel Core i5', '12MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache12MB', 'Intel Core i3', '12MB');
gettingProcessorBySeriesAndCache('intelPentiumcache12MB', 'Intel Pentium', '12MB');
gettingProcessorBySeriesAndCache('intelCeleroncache12MB', 'Intel Celeron', '12MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache12MB', 'AMD Threadripper', '12MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache12MB', 'AMD Ryzen 9', '12MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache12MB', 'AMD Ryzen 7', '12MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache12MB', 'AMD Ryzen 5', '12MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache12MB', 'AMD Ryzen 3', '12MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache16MB', 'Intel Core i9', '16MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache16MB', 'Intel Core i7', '16MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache16MB', 'Intel Core i5', '16MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache16MB', 'Intel Core i3', '16MB');
gettingProcessorBySeriesAndCache('intelPentiumcache16MB', 'Intel Pentium', '16MB');
gettingProcessorBySeriesAndCache('intelCeleroncache16MB', 'Intel Celeron', '16MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache16MB', 'AMD Threadripper', '16MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache16MB', 'AMD Ryzen 9', '16MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache16MB', 'AMD Ryzen 7', '16MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache16MB', 'AMD Ryzen 5', '16MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache16MB', 'AMD Ryzen 3', '16MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache18MB', 'Intel Core i9', '18MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache18MB', 'Intel Core i7', '18MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache18MB', 'Intel Core i5', '18MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache18MB', 'Intel Core i3', '18MB');
gettingProcessorBySeriesAndCache('intelPentiumcache18MB', 'Intel Pentium', '18MB');
gettingProcessorBySeriesAndCache('intelCeleroncache18MB', 'Intel Celeron', '18MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache18MB', 'AMD Threadripper', '18MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache18MB', 'AMD Ryzen 9', '18MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache18MB', 'AMD Ryzen 7', '18MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache18MB', 'AMD Ryzen 5', '18MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache18MB', 'AMD Ryzen 3', '18MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache19MB', 'Intel Core i9', '19MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache19MB', 'Intel Core i7', '19MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache19MB', 'Intel Core i5', '19MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache19MB', 'Intel Core i3', '19MB');
gettingProcessorBySeriesAndCache('intelPcan api be 50000 code linesentiumcache19MB', 'Intel Pentium', '19MB');
gettingProcessorBySeriesAndCache('intelCeleroncache19MB', 'Intel Celeron', '19MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache19MB', 'AMD Threadripper', '19MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache19MB', 'AMD Ryzen 9', '19MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache19MB', 'AMD Ryzen 7', '19MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache19MB', 'AMD Ryzen 5', '19MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache19MB', 'AMD Ryzen 3', '19MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache1925MB', 'Intel Core i9', '19.25MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache1925MB', 'Intel Core i7', '19.25MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache1925MB', 'Intel Core i5', '19.25MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache1925MB', 'Intel Core i3', '19.25MB');
gettingProcessorBySeriesAndCache('intelPentiumcache1925MB', 'Intel Pentium', '19.25MB');
gettingProcessorBySeriesAndCache('intelCeleroncache1925MB', 'Intel Celeron', '19.25MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache1925MB', 'AMD Threadripper', '19.25MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache1925MB', 'AMD Ryzen 9', '19.25MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache1925MB', 'AMD Ryzen 7', '19.25MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache1925MB', 'AMD Ryzen 5', '19.25MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache1925MB', 'AMD Ryzen 3', '19.25MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache20MB', 'Intel Core i9', '20MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache20MB', 'Intel Core i7', '20MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache20MB', 'Intel Core i5', '20MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache20MB', 'Intel Core i3', '20MB');
gettingProcessorBySeriesAndCache('intelPentiumcache20MB', 'Intel Pentium', '20MB');
gettingProcessorBySeriesAndCache('intelCeleroncache20MB', 'Intel Celeron', '20MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache20MB', 'AMD Threadripper', '20MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache20MB', 'AMD Ryzen 9', '20MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache20MB', 'AMD Ryzen 7', '20MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache20MB', 'AMD Ryzen 5', '20MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache20MB', 'AMD Ryzen 3', '20MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache2475MB', 'Intel Core i9', '24.75MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache2475MB', 'Intel Core i7', '24.75MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache2475MB', 'Intel Core i5', '24.75MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache2475MB', 'Intel Core i3', '24.75MB');
gettingProcessorBySeriesAndCache('intelPentiumcache2475MB', 'Intel Pentium', '24.75MB');
gettingProcessorBySeriesAndCache('intelCeleroncache2475MB', 'Intel Celeron', '24.75MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache2475MB', 'AMD Threadripper', '24.75MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache2475MB', 'AMD Ryzen 9', '24.75MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache2475MB', 'AMD Ryzen 7', '24.75MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache2475MB', 'AMD Ryzen 5', '24.75MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache2475MB', 'AMD Ryzen 3', '24.75MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache25MB', 'Intel Core i9', '25MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache25MB', 'Intel Core i7', '25MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache25MB', 'Intel Core i5', '25MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache25MB', 'Intel Core i3', '25MB');
gettingProcessorBySeriesAndCache('intelPentiumcache25MB', 'Intel Pentium', '25MB');
gettingProcessorBySeriesAndCache('intelCeleroncache25MB', 'Intel Celeron', '25MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache25MB', 'AMD Threadripper', '25MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache25MB', 'AMD Ryzen 9', '25MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache25MB', 'AMD Ryzen 7', '25MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache25MB', 'AMD Ryzen 5', '25MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache25MB', 'AMD Ryzen 3', '25MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache35MB', 'Intel Core i9', '35MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache35MB', 'Intel Core i7', '35MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache35MB', 'Intel Core i5', '35MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache35MB', 'Intel Core i3', '35MB');
gettingProcessorBySeriesAndCache('intelPentiumcache35MB', 'Intel Pentium', '35MB');
gettingProcessorBySeriesAndCache('intelCeleroncache35MB', 'Intel Celeron', '35MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache35MB', 'AMD Threadripper', '35MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache35MB', 'AMD Ryzen 9', '35MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache35MB', 'AMD Ryzen 7', '35MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache35MB', 'AMD Ryzen 5', '35MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache35MB', 'AMD Ryzen 3', '35MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache36MB', 'Intel Core i9', '36MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache36MB', 'Intel Core i7', '36MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache36MB', 'Intel Core i5', '36MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache36MB', 'Intel Core i3', '36MB');
gettingProcessorBySeriesAndCache('intelPentiumcache36MB', 'Intel Pentium', '36MB');
gettingProcessorBySeriesAndCache('intelCeleroncache36MB', 'Intel Celeron', '36MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache36MB', 'AMD Threadripper', '36MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache36MB', 'AMD Ryzen 9', '36MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache36MB', 'AMD Ryzen 7', '36MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache36MB', 'AMD Ryzen 5', '36MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache36MB', 'AMD Ryzen 3', '36MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache70MB', 'Intel Core i9', '70MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache70MB', 'Intel Core i7', '70MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache70MB', 'Intel Core i5', '70MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache70MB', 'Intel Core i3', '70MB');
gettingProcessorBySeriesAndCache('intelPentiumcache70MB', 'Intel Pentium', '70MB');
gettingProcessorBySeriesAndCache('intelCeleroncache70MB', 'Intel Celeron', '70MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache70MB', 'AMD Threadripper', '70MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache70MB', 'AMD Ryzen 9', '70MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache70MB', 'AMD Ryzen 7', '70MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache70MB', 'AMD Ryzen 5', '70MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache70MB', 'AMD Ryzen 3', '70MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache288MB', 'Intel Core i9', '288MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache288MB', 'Intel Core i7', '288MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache288MB', 'Intel Core i5', '288MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache288MB', 'Intel Core i3', '288MB');
gettingProcessorBySeriesAndCache('intelPentiumcache288MB', 'Intel Pentium', '288MB');
gettingProcessorBySeriesAndCache('intelCeleroncache288MB', 'Intel Celeron', '288MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache288MB', 'AMD Threadripper', '288MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache288MB', 'AMD Ryzen 9', '288MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache288MB', 'AMD Ryzen 7', '288MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache288MB', 'AMD Ryzen 5', '288MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache288MB', 'AMD Ryzen 3', '288MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache72MB', 'Intel Core i9', '72MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache72MB', 'Intel Core i7', '72MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache72MB', 'Intel Core i5', '72MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache72MB', 'Intel Core i3', '72MB');
gettingProcessorBySeriesAndCache('intelPentiumcache72MB', 'Intel Pentium', '72MB');
gettingProcessorBySeriesAndCache('intelCeleroncache72MB', 'Intel Celeron', '72MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache72MB', 'AMD Threadripper', '72MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache72MB', 'AMD Ryzen 9', '72MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache72MB', 'AMD Ryzen 7', '72MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache72MB', 'AMD Ryzen 5', '72MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache72MB', 'AMD Ryzen 3', '72MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache140MB', 'Intel Core i9', '140MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache140MB', 'Intel Core i7', '140MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache140MB', 'Intel Core i5', '140MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache140MB', 'Intel Core i3', '140MB');
gettingProcessorBySeriesAndCache('intelPentiumcache140MB', 'Intel Pentium', '140MB');
gettingProcessorBySeriesAndCache('intelCeleroncache140MB', 'Intel Celeron', '140MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache140MB', 'AMD Threadripper', '140MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache140MB', 'AMD Ryzen 9', '140MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache140MB', 'AMD Ryzen 7', '140MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache140MB', 'AMD Ryzen 5', '140MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache140MB', 'AMD Ryzen 3', '140MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache144MB', 'Intel Core i9', '144MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache144MB', 'Intel Core i7', '144MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache144MB', 'Intel Core i5', '144MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache144MB', 'Intel Core i3', '144MB');
gettingProcessorBySeriesAndCache('intelPentiumcache144MB', 'Intel Pentium', '144MB');
gettingProcessorBySeriesAndCache('intelCeleroncache144MB', 'Intel Celeron', '144MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache144MB', 'AMD Threadripper', '144MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache144MB', 'AMD Ryzen 9', '144MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache144MB', 'AMD Ryzen 7', '144MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache144MB', 'AMD Ryzen 5', '144MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache144MB', 'AMD Ryzen 3', '144MB');

gettingProcessorBySeriesAndCache('intelCoreI9cache30MB', 'Intel Core i9', '30MB');
gettingProcessorBySeriesAndCache('intelCoreI7cache30MB', 'Intel Core i7', '30MB');
gettingProcessorBySeriesAndCache('intelCoreI5cache30MB', 'Intel Core i5', '30MB');
gettingProcessorBySeriesAndCache('intelCoreI3cache30MB', 'Intel Core i3', '30MB');
gettingProcessorBySeriesAndCache('intelPentiumcache30MB', 'Intel Pentium', '30MB');
gettingProcessorBySeriesAndCache('intelCeleroncache30MB', 'Intel Celeron', '30MB');
gettingProcessorBySeriesAndCache('amdThreadrippercache30MB', 'AMD Threadripper', '30MB');
gettingProcessorBySeriesAndCache('amdRyzen9cache30MB', 'AMD Ryzen 9', '30MB');
gettingProcessorBySeriesAndCache('amdRyzen7cache30MB', 'AMD Ryzen 7', '30MB');
gettingProcessorBySeriesAndCache('amdRyzen5cache30MB', 'AMD Ryzen 5', '30MB');
gettingProcessorBySeriesAndCache('amdRyzen3cache30MB', 'AMD Ryzen 3', '30MB');

// Processor by series and price

function gettingProcessorBySeriesAndPrice(endpoint, series, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorPrice: { $gt: minimalPrice, $lt: maximalPrice}}).toArray());
    })
}

gettingProcessorBySeriesAndPrice('intelCoreI90500', 'Intel Core i9', 0, 500)
gettingProcessorBySeriesAndPrice('intelCoreI70500', 'Intel Core i7', 0, 500)
gettingProcessorBySeriesAndPrice('intelCoreI50500', 'Intel Core i5', 0, 500)
gettingProcessorBySeriesAndPrice('intelCoreI30500', 'Intel Core i3', 0, 500)
gettingProcessorBySeriesAndPrice('intelPentium0500', 'Intel Pentium', 0, 500)
gettingProcessorBySeriesAndPrice('intelCeleron0500', 'Intel Celeron', 0, 500)
gettingProcessorBySeriesAndPrice('amdThreadripper0500', 'AMD Threadripper', 0, 500)
gettingProcessorBySeriesAndPrice('amdRyzen90500', 'AMD Ryzen 9', 0, 500)
gettingProcessorBySeriesAndPrice('amdRyzen70500', 'AMD Ryzen 7', 0, 500)
gettingProcessorBySeriesAndPrice('amdRyzen50500', 'AMD Ryzen 5', 0, 500)
gettingProcessorBySeriesAndPrice('amdRyzen30500', 'AMD Ryzen 3', 0, 500)

gettingProcessorBySeriesAndPrice('intelCoreI95001000', 'Intel Core i9', 500, 1000)
gettingProcessorBySeriesAndPrice('intelCoreI75001000', 'Intel Core i7', 500, 1000)
gettingProcessorBySeriesAndPrice('intelCoreI55001000', 'Intel Core i5', 500, 1000)
gettingProcessorBySeriesAndPrice('intelCoreI35001000', 'Intel Core i3', 500, 1000)
gettingProcessorBySeriesAndPrice('intelPentium5001000', 'Intel Pentium', 500, 1000)
gettingProcessorBySeriesAndPrice('intelCeleron5001000', 'Intel Celeron', 500, 1000)
gettingProcessorBySeriesAndPrice('amdThreadripper5001000', 'AMD Threadripper', 500, 1000)
gettingProcessorBySeriesAndPrice('amdRyzen95001000', 'AMD Ryzen 9', 500, 1000)
gettingProcessorBySeriesAndPrice('amdRyzen75001000', 'AMD Ryzen 7', 500, 1000)
gettingProcessorBySeriesAndPrice('amdRyzen55001000', 'AMD Ryzen 5', 500, 1000)
gettingProcessorBySeriesAndPrice('amdRyzen35001000', 'AMD Ryzen 3', 500, 1000)

gettingProcessorBySeriesAndPrice('intelCoreI910001500', 'Intel Core i9', 1000, 1500)
gettingProcessorBySeriesAndPrice('intelCoreI710001500', 'Intel Core i7',1000, 1500)
gettingProcessorBySeriesAndPrice('intelCoreI510001500', 'Intel Core i5',1000, 1500)
gettingProcessorBySeriesAndPrice('intelCoreI310001500', 'Intel Core i3',1000, 1500)
gettingProcessorBySeriesAndPrice('intelPentium10001500', 'Intel Pentium',1000, 1500)
gettingProcessorBySeriesAndPrice('intelCeleron10001500', 'Intel Celeron',1000, 1500)
gettingProcessorBySeriesAndPrice('amdThreadripper10001500', 'AMD Threadripper', 1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen910001500', 'AMD Ryzen 9',1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen710001500', 'AMD Ryzen 7',1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen510001500', 'AMD Ryzen 5',1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen310001500', 'AMD Ryzen 3',1000, 1500)

gettingProcessorBySeriesAndPrice('intelCoreI915001500', 'Intel Core i9', 1000, 1500)
gettingProcessorBySeriesAndPrice('intelCoreI715001500', 'Intel Core i7',1000, 1500)
gettingProcessorBySeriesAndPrice('intelCoreI515001500', 'Intel Core i5',1000, 1500)
gettingProcessorBySeriesAndPrice('intelCoreI315001500', 'Intel Core i3',1000, 1500)
gettingProcessorBySeriesAndPrice('intelPentium15001500', 'Intel Pentium',1000, 1500)
gettingProcessorBySeriesAndPrice('intelCeleron15001500', 'Intel Celeron',1000, 1500)
gettingProcessorBySeriesAndPrice('amdThreadripper15001500', 'AMD Threadripper', 1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen915001500', 'AMD Ryzen 9',1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen715001500', 'AMD Ryzen 7',1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen515001500', 'AMD Ryzen 5',1000, 1500)
gettingProcessorBySeriesAndPrice('amdRyzen315001500', 'AMD Ryzen 3',1000, 1500)

gettingProcessorBySeriesAndPrice('intelCoreI915002000', 'Intel Core i9', 1500, 2000)
gettingProcessorBySeriesAndPrice('intelCoreI715002000', 'Intel Core i7',1500, 2000)
gettingProcessorBySeriesAndPrice('intelCoreI515002000', 'Intel Core i5',1500, 2000)
gettingProcessorBySeriesAndPrice('intelCoreI315002000', 'Intel Core i3',1500, 2000)
gettingProcessorBySeriesAndPrice('intelPentium15002000', 'Intel Pentium',1500, 2000)
gettingProcessorBySeriesAndPrice('intelCeleron15002000', 'Intel Celeron',1500, 2000)
gettingProcessorBySeriesAndPrice('amdThreadripper15002000', 'AMD Threadripper', 1500, 2000)
gettingProcessorBySeriesAndPrice('amdRyzen915002000', 'AMD Ryzen 9',1500, 2000)
gettingProcessorBySeriesAndPrice('amdRyzen715002000', 'AMD Ryzen 7',1500, 2000)
gettingProcessorBySeriesAndPrice('amdRyzen515002000', 'AMD Ryzen 5',1500, 2000)
gettingProcessorBySeriesAndPrice('amdRyzen315002000', 'AMD Ryzen 3',1500, 2000)

gettingProcessorBySeriesAndPrice('intelCoreI920002500', 'Intel Core i9', 2000, 2500)
gettingProcessorBySeriesAndPrice('intelCoreI720002500', 'Intel Core i7',2000, 2500)
gettingProcessorBySeriesAndPrice('intelCoreI520002500', 'Intel Core i5',2000, 2500)
gettingProcessorBySeriesAndPrice('intelCoreI320002500', 'Intel Core i3',2000, 2500)
gettingProcessorBySeriesAndPrice('intelPentium20002500', 'Intel Pentium',2000, 2500)
gettingProcessorBySeriesAndPrice('intelCeleron20002500', 'Intel Celeron',2000, 2500)
gettingProcessorBySeriesAndPrice('amdThreadripper20002500', 'AMD Threadripper', 2000, 2500)
gettingProcessorBySeriesAndPrice('amdRyzen920002500', 'AMD Ryzen 9',2000, 2500)
gettingProcessorBySeriesAndPrice('amdRyzen720002500', 'AMD Ryzen 7',2000, 2500)
gettingProcessorBySeriesAndPrice('amdRyzen520002500', 'AMD Ryzen 5',2000, 2500)
gettingProcessorBySeriesAndPrice('amdRyzen320002500', 'AMD Ryzen 3',2000, 2500)

gettingProcessorBySeriesAndPrice('intelCoreI925003000', 'Intel Core i9', 2500, 3000)
gettingProcessorBySeriesAndPrice('intelCoreI725003000', 'Intel Core i7',2500, 3000)
gettingProcessorBySeriesAndPrice('intelCoreI525003000', 'Intel Core i5',2500, 3000)
gettingProcessorBySeriesAndPrice('intelCoreI325003000', 'Intel Core i3',2500, 3000)
gettingProcessorBySeriesAndPrice('intelPentium25003000', 'Intel Pentium',2500, 3000)
gettingProcessorBySeriesAndPrice('intelCeleron25003000', 'Intel Celeron',2500, 3000)
gettingProcessorBySeriesAndPrice('amdThreadripper25003000', 'AMD Threadripper', 2500, 3000)
gettingProcessorBySeriesAndPrice('amdRyzen925003000', 'AMD Ryzen 9',2500, 3000)
gettingProcessorBySeriesAndPrice('amdRyzen725003000', 'AMD Ryzen 7',2500, 3000)
gettingProcessorBySeriesAndPrice('amdRyzen525003000', 'AMD Ryzen 5',2500, 3000)
gettingProcessorBySeriesAndPrice('amdRyzen325003000', 'AMD Ryzen 3',2500, 3000)

// Processor by series and price

function gettingProcessorBySeriesAndCache(endpoint, series, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorClocking: { $gt: minimalClocking, $lt: maximalClocking}}).toArray());
    })
}

gettingProcessorBySeriesAndCache('intelCoreI92128', 'Intel Core i9', 2.1, 2.8)
gettingProcessorBySeriesAndCache('intelCoreI72128', 'Intel Core i7',2.1, 2.8)
gettingProcessorBySeriesAndCache('intelCoreI52128', 'Intel Core i5',2.1, 2.8)
gettingProcessorBySeriesAndCache('intelCoreI32128', 'Intel Core i3',2.1, 2.8)
gettingProcessorBySeriesAndCache('intelPentium2128', 'Intel Pentium',2.1, 2.8)
gettingProcessorBySeriesAndCache('intelCeleron2128', 'Intel Celeron',2.1, 2.8)
gettingProcessorBySeriesAndCache('amdThreadripper2128', 'AMD Threadripper', 2.1, 2.8)
gettingProcessorBySeriesAndCache('amdRyzen92128', 'AMD Ryzen 9',2.1, 2.8)
gettingProcessorBySeriesAndCache('amdRyzen72128', 'AMD Ryzen 7',2.1, 2.8)
gettingProcessorBySeriesAndCache('amdRyzen52128', 'AMD Ryzen 5',2.1, 2.8)
gettingProcessorBySeriesAndCache('amdRyzen32128', 'AMD Ryzen 3',2.1, 2.8)

gettingProcessorBySeriesAndCache('intelCoreI92935', 'Intel Core i9', 2.9, 3.5)
gettingProcessorBySeriesAndCache('intelCoreI72935', 'Intel Core i7',2.9, 3.5)
gettingProcessorBySeriesAndCache('intelCoreI52935', 'Intel Core i5',2.9, 3.5)
gettingProcessorBySeriesAndCache('intelCoreI32935', 'Intel Core i3',2.9, 3.5)
gettingProcessorBySeriesAndCache('intelPentium2935', 'Intel Pentium',2.9, 3.5)
gettingProcessorBySeriesAndCache('intelCeleron2935', 'Intel Celeron',2.9, 3.5)
gettingProcessorBySeriesAndCache('amdThreadripper2935', 'AMD Threadripper', 2.9, 3.5)
gettingProcessorBySeriesAndCache('amdRyzen92935', 'AMD Ryzen 9',2.9, 3.5)
gettingProcessorBySeriesAndCache('amdRyzen72935', 'AMD Ryzen 7',2.9, 3.5)
gettingProcessorBySeriesAndCache('amdRyzen52935', 'AMD Ryzen 5',2.9, 3.5)
gettingProcessorBySeriesAndCache('amdRyzen32935', 'AMD Ryzen 3',2.9, 3.5)

gettingProcessorBySeriesAndCache('intelCoreI93642', 'Intel Core i9', 3.6, 4.2)
gettingProcessorBySeriesAndCache('intelCoreI73642', 'Intel Core i7',3.6, 4.2)
gettingProcessorBySeriesAndCache('intelCoreI53642', 'Intel Core i5',3.6, 4.2)
gettingProcessorBySeriesAndCache('intelCoreI33642', 'Intel Core i3',3.6, 4.2)
gettingProcessorBySeriesAndCache('intelPentium3642', 'Intel Pentium',3.6, 4.2)
gettingProcessorBySeriesAndCache('intelCeleron3642', 'Intel Celeron',3.6, 4.2)
gettingProcessorBySeriesAndCache('amdThreadripper3642', 'AMD Threadripper', 3.6, 4.2)
gettingProcessorBySeriesAndCache('amdRyzen93642', 'AMD Ryzen 9',3.6, 4.2)
gettingProcessorBySeriesAndCache('amdRyzen73642', 'AMD Ryzen 7',3.6, 4.2)
gettingProcessorBySeriesAndCache('amdRyzen53642', 'AMD Ryzen 5',3.6, 4.2)
gettingProcessorBySeriesAndCache('amdRyzen33642', 'AMD Ryzen 3',3.6, 4.2)



// Processor by socket  endpoints

function gettingProcessorBySocket(endpoint, socket) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSocket: socket}).toArray());
    })
}

gettingProcessorBySocket('socket1151', 'Socket 1151');
gettingProcessorBySocket('socket1151IntelCore8generatiocCoffeLake', 'Socket 1151 (Intel Core 8 gen. Coffe Lake)');
gettingProcessorBySocket('socket1200', 'Socket 1200');
gettingProcessorBySocket('socket2066', 'Socket 2066');
gettingProcessorBySocket('socketAm4', 'Socket AM4');
gettingProcessorBySocket('socketsTrx4', 'Socket sTRX4');
gettingProcessorBySocket('socketsWrxb', 'Socket sWRXB');
gettingProcessorBySocket('socket1700', 'Socket 1700');

// Processor by cache endpoints

function gettingProcessorByCache(endpoint, cache) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorCache: cache}).toArray());
    })
}

gettingProcessorByCache('cache2MB', '2MB');
gettingProcessorByCache('cache4MB', '4MB');
gettingProcessorByCache('cache5MB', '5MB');
gettingProcessorByCache('cache6MB', '6MB');
gettingProcessorByCache('cache8MB', '8MB');
gettingProcessorByCache('cache9MB', '9MB');
gettingProcessorByCache('cache10MB', '10MB');
gettingProcessorByCache('cache12MB', '12MB');
gettingProcessorByCache('cache16MB', '16MB');
gettingProcessorByCache('cache18MB', '18MB');
gettingProcessorByCache('cache19MB', '19MB');
gettingProcessorByCache('cache1925MB', '19.25MB');
gettingProcessorByCache('cache20MB', '20MB');
gettingProcessorByCache('cache2475MB', '24.75MB');
gettingProcessorByCache('cache25MB', '25MB');
gettingProcessorByCache('cache35MB', '35MB');
gettingProcessorByCache('cache36MB', '36MB');
gettingProcessorByCache('cache70MB', '70MB');
gettingProcessorByCache('cache288MB', '288MB');
gettingProcessorByCache('cache72MB', '72MB');
gettingProcessorByCache('cache140MB', '140MB');
gettingProcessorByCache('cache144MB', '144MB');
gettingProcessorByCache('cache30MB', '30MB');

// Processor by clocking endpoints

function gettingProcessorByClocking(endpoint, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorClocking: { $gte: minimalClocking, $lte: maximalClocking}}).toArray());
    })
}

gettingProcessorByClocking('2128', 2.1, 2.8);
gettingProcessorByClocking('2935', 2.9, 3.5);
gettingProcessorByClocking('3642', 3.5, 4.2 )


// Processor by price endpoints

function gettingProcessorByPrice(endpoint, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorPrice: { $gt: minimalPrice, $lt: maximalPrice }}).toArray());
    })
}

gettingProcessorByPrice('0500', 0, 500)
gettingProcessorByPrice('5001000', 500, 1000)
gettingProcessorByPrice('10001500', 1000, 1500)
gettingProcessorByPrice('15002000', 1500, 2000)
gettingProcessorByPrice('20002500', 2000, 2500)
gettingProcessorByPrice('25003000', 2500, 3000)


// Getting processor mongodb collection

async function loadProcessorsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Dominik:Was1ant201@postapp.osn2b.mongodb.net/postApp?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('postApp').collection('processors');
}
module.exports = router;