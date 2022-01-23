const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Getting processor mongodb collection

async function loadProcessorsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Dominik:Was1ant201@postapp.osn2b.mongodb.net/postApp?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('postApp').collection('processors');
}
module.exports = router;

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
        processorSocket: req.body.socket,
        processorPic: req.body.pic,
        processorAmount: req.body.amount
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

let processorsSeriesArray = [
    {
        endpoint: 'intelCoreI9',
        series: 'Intel Core i9'
    },
    {
        endpoint: 'intelCoreI7',
        series: 'Intel Core i7'
    },
    {
        endpoint: 'intelCoreI5',
        series: 'Intel Core i5'
    },
    {
        endpoint: 'intelCoreI3',
        series: 'Intel Core i3'
    },
    {
        endpoint: 'intelPentium',
        series: 'Intel Pentium'
    },
    {
        endpoint: 'intelCeleron',
        series: 'Intel Celeron'
    },
    {
        endpoint: 'amdThreadripper',
        series: 'AMD Threadripper'
    },
    {
        endpoint: 'amdRyzen9',
        series: 'AMD Ryzen 9'
    },
    {
        endpoint: 'amdRyzen7',
        series: 'AMD Ryzen 7'
    },
    {
        endpoint: 'amdRyzen5',
        series: 'AMD Ryzen 5'
    },
    {
        endpoint: 'amdRyzen3',
        series: 'AMD Ryzen 3'
    },
    {
        endpoint: 'amdAthlon',
        series: "AMD Athlon"
    }
]

function gettingProcessorBySeries(endpoint, series) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: `${series}`}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    gettingProcessorBySeries(series.endpoint, series.series);
})

// Processor by socket  endpoints

let processorSocketArray = [
    {
        endpoint: 'socket1151',
        socket: 'Socket 1151'
    },
    {
        endpoint: 'socket1151IntelCore8generatiocCoffeLake',
        socket: 'Socket 1151 (Intel Core 8 gen. Coffe Lake)'
    },
    {
        endpoint: 'socket1200',
        socket: 'Socket 1200'
    },
    {
        endpoint: 'socket2066',
        socket: 'Socket 2066'
    },
    {
        endpoint: 'socketAm4',
        socket: 'Socket AM4'
    },
    {
        endpoint: 'socketsTrx4',
        socket: 'Socket sTRX4'
    },
    {
        endpoint: 'socketWrxb',
        socket: 'Socket Wrxb'
    },
    {
        endpoint: 'socket1700',
        socket: 'Socket 1700'
    }
]

function gettingProcessorBySocket(endpoint, socket) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSocket: socket}).toArray());
    })
}

processorSocketArray.forEach(socket => {
    gettingProcessorBySocket(socket.endpoint, socket.socket)
})

// Processor by cache endpoints

function gettingProcessorByCache(endpoint, cache) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorCache: cache}).toArray());
    })
}

let processorCacheArray = [
    {
        endpoint: 'cache2MB',
        cache: '2MB',
    },
    {
        endpoint: 'cache4MB',
        cache: '4MB',
    },
    {
        endpoint: 'cache5MB',
        cache: '5MB',
    },
    {
        endpoint: 'cache6MB',
        cache: '6MB',
    },
    {
        endpoint: 'cache8MB',
        cache: '8MB',
    },
    {
        endpoint: 'cache9MB',
        cache: '9MB',
    },
    {
        endpoint: 'cache10MB',
        cache: '10MB',
    },
    {
        endpoint: 'cache12MB',
        cache: '12MB',
    },
    {
        endpoint: 'cache16MB',
        cache: '16MB',
    },
    {
        endpoint: 'cache18MB',
        cache: '18MB',
    },
    {
        endpoint: 'cache19MB',
        cache: '19MB',
    },
    {
        endpoint: 'cache1925MB',
        cache: '19.25MB',
    },
    {
        endpoint: 'cache20MB',
        cache: '20MB',
    },
    {
        endpoint: 'cache2475MB',
        cache: '24.75MB',
    },
    {
        endpoint: 'cache25MB',
        cache: '25MB',
    },
    {
        endpoint: 'cache35MB',
        cache: '35MB',
    },
    {
        endpoint: 'cache36MB',
        cache: '36MB',
    },
    {
        endpoint: 'cache70MB',
        cache: '70MB',
    },
    {
        endpoint: 'cache288MB',
        cache: '288MB',
    },
    {
        endpoint: 'cache72MB',
        cache: '72MB',
    },
    {
        endpoint: 'cache140MB',
        cache: '140MB',
    },
    {
        endpoint: 'cache144MB',
        cache: '144MB',
    },
    {
        endpoint: 'cache30MB',
        cache: '30MB',
    }
]

processorCacheArray.forEach(cache => {
    gettingProcessorByCache(cache.endpoint, cache.cache)
})

// Processor by clocking endpoints

let processorClockingArray = [
    {
        endpoint: '2128',
        minimalClocking: 2.1,
        maximalClocking: 2.8
    },
    {
        endpoint: '2935',
        minimalClocking: 2.9,
        maximalClocking: 3.5
    },
    {
        endpoint: '3642',
        minimalClocking: 3.6,
        maximalClocking: 4.2
    }
]

function gettingProcessorByClocking(endpoint, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorClocking: { $gte: minimalClocking, $lte: maximalClocking}}).toArray());
    })
}

processorClockingArray.forEach(clocking => {
    gettingProcessorByClocking(clocking.endpoint, clocking.minimalClocking, clocking.maximalClocking)
})

// Processor by price endpoints

function gettingProcessorByPrice(endpoint, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorPrice: { $gt: minimalPrice, $lt: maximalPrice }}).toArray());
    })
}

let processorPriceArray = [
    {
        endpoint: '0500',
        minimalPrice: 0,
        maximalPrice: 500
    },
    {
        endpoint: '5001000',
        minimalPrice: 500,
        maximalPrice: 1000
    },
    {
        endpoint: '10001500',
        minimalPrice: 1000,
        maximalPrice: 1500
    },
    {
        endpoint: '15002000',
        minimalPrice: 1500,
        maximalPrice: 2000
    },
    {
        endpoint: '20002500',
        minimalPrice: 2000,
        maximalPrice: 2500
    },
    {
        endpoint: '25003000',
        minimalPrice: 2500,
        maximalPrice: 3000
    },
    {
        endpoint: '300010000',
        minimalPrice: 3000,
        maximalPrice: 10000
    },
]

processorPriceArray.forEach(price => {
    gettingProcessorByPrice(price.endpoint, price.minimalPrice, price.maximalPrice)
})

//Processor by Series and cache

function gettingProcessorBySeriesAndCache(endpoint, series, cache) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorCache: cache}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorCacheArray.forEach(cache => {
        gettingProcessorBySeriesAndCache(`${series.endpoint}${cache.endpoint}`, series.series, cache.cache)
    })
})

//Processor Series and socket

function gettingProcessorBySeriesAndSocket(endpoint, series, socket) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        gettingProcessorBySeriesAndSocket(`${series.endpoint}${socket.endpoint}`, series.series, socket.socket)
    })
})


//Processor Series and clocking

function gettingProcessorBySeriesAndClocking(endpoint, series, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorClocking: { $gte: minimalClocking, $lte: maximalClocking }}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorClockingArray.forEach(clocking => {
        gettingProcessorBySeriesAndClocking(`${series.endpoint}${clocking.endpoint}`, series.series, clocking.minimalClocking, clocking.maximalClocking);
    })
})

//Processor Series and clocking

function gettingProcessorBySeriesAndPrice(endpoint, series, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorPrice: { $gte: minimalPrice, $lte: maximalPrice }}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorPriceArray.forEach(price => {
        gettingProcessorBySeriesAndPrice(`${series.endpoint}${price.endpoint}`, series.series, price.minimalPrice, price.maximalPrice);
    })
})


// Processor series socket cache

function gettingProcessorBySeriesSocketAndCache(endpoint, series, socket, cache) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket, processorCache: cache}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        processorCacheArray.forEach(cache => {
            gettingProcessorBySeriesSocketAndCache(`${series.endpoint}${socket.endpoint}${cache.endpoint}`, series.series, socket.socket, cache.cache)
        })
    })
})

// Processor series socket clocking

function gettingProcessorBySeriesSocketAndClocking(endpoint, series, socket, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket, processorClocking: { $gte: minimalClocking, $lte: maximalClocking}}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        processorClockingArray.forEach(clocking => {
            gettingProcessorBySeriesSocketAndClocking(`${series.endpoint}${socket.endpoint}${clocking.endpoint}`, series.series, socket.socket, clocking.minimalClocking, clocking.maximalClocking)
        })
    })
})


// Processor series socket price

function gettingProcessorBySeriesSocketAndPrice(endpoint, series, socket, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket, processorPrice: { $gt: minimalPrice, $lt: maximalPrice}}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        processorPriceArray.forEach(price => {
            gettingProcessorBySeriesSocketAndPrice(`${series.endpoint}${socket.endpoint}${price.endpoint}`, series.series, socket.socket, price.minimalPrice, price.maximalPrice)
        })
    })
})

// Processor series socket cache clocking

function gettingProcessorBySeriesSocketCacheAndClocking(endpoint, series, socket, cache, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket, processorCache: cache, processorClocking: { $gte: minimalClocking, $lte: maximalClocking}}).toArray());
    })
}


processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        processorCacheArray.forEach(cache => {
            processorClockingArray.forEach(clocking => {
                gettingProcessorBySeriesSocketCacheAndClocking(`${series.endpoint}${socket.endpoint}${cache.endpoint}${clocking.endpoint}`, series.series, socket.socket, cache.cache, clocking.minimalClocking, clocking.maximalClocking);
            })
        })
    })
})


// Processor series socket cache price

function gettingProcessorBySeriesSocketCacheAndPrice(endpoint, series, socket, cache, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket, processorCache: cache, processorPrice: { $gt: minimalPrice, $lt: maximalPrice}}).toArray());
    })
}


processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        processorCacheArray.forEach(cache => {
            processorPriceArray.forEach(price => {
                gettingProcessorBySeriesSocketCacheAndPrice(`${series.endpoint}${socket.endpoint}${cache.endpoint}${price.endpoint}`, series.series, socket.socket, cache.cache, price.minimalPrice, price.maximalPrice);
            })
        })
    })
})

// Processor series socket cache clocking price

function gettingProcessorBySeriesSocketCacheClockingAndPrice(endpoint, series, socket, cache, minimalClocking, maximalClocking, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorSocket: socket, processorCache: cache, processorClocking: { $gte: minimalClocking, $lte: maximalClocking}, processorPrice: { $gt: minimalPrice, $lt: maximalPrice}}).toArray());
    })
}


processorsSeriesArray.forEach(series => {
    processorSocketArray.forEach(socket => {
        processorCacheArray.forEach(cache => {
            processorClockingArray.forEach(clocking => {
                processorPriceArray.forEach(price => {
                    gettingProcessorBySeriesSocketCacheClockingAndPrice(`${series.endpoint}${socket.endpoint}${cache.endpoint}${clocking.endpoint}${price.endpoint}`, series.series, socket.socket, cache.cache, clocking.minimalClocking, clocking.maximalClocking, price.minimalPrice, price.maximalPrice);
                })
            })
        })
    })
})

//Processor  Series  cache clocking

function gettingProcessorBySeriesCacheAndClocking(endpoint, series, cache, minimalClocking, maximalClocking) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorCache: cache, processorClocking: { $gte: minimalClocking, $lte: maximalClocking }}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorCacheArray.forEach(cache => {
        processorClockingArray.forEach(clocking => {
            gettingProcessorBySeriesCacheAndClocking(`${series.endpoint}${cache.endpoint}${clocking.endpoint}`, series.series, cache.cache, clocking.minimalClocking, clocking.maximalClocking)
        })
    })
})

//Processor  Series  cache price

function gettingProcessorBySeriesCacheAndPrice(endpoint, series, cache, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorCache: cache, processorPrice: { $gt: minimalPrice, $lt: maximalPrice }}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorCacheArray.forEach(cache => {
        processorPriceArray.forEach(price => {
            gettingProcessorBySeriesCacheAndPrice(`${series.endpoint}${cache.endpoint}${price.endpoint}`, series.series, cache.cache, price.minimalPrice, price.maximalPrice)
        })
    })
})

//Processor  Series  cache clocking price

function gettingProcessorBySeriesCacheClockingAndPrice(endpoint, series, cache, minimalClocking, maximalClocking, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorCache: cache, processorClocking: { $gte: minimalClocking, $lte: maximalClocking }, processorPrice: { $gt: minimalPrice, $lt: maximalPrice }}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorCacheArray.forEach(cache => {
        processorClockingArray.forEach(clocking => {
            processorPriceArray.forEach(price => {
                gettingProcessorBySeriesCacheClockingAndPrice(`${series.endpoint}${cache.endpoint}${clocking.endpoint}${price.endpoint}`, series.series, cache.cache, clocking.minimalClocking, clocking.maximalClocking, price.minimalPrice, price.maximalPrice)
            })
        })
    })
})

//Processor  Series clocking price

function gettingProcessorBySeriesClockingAndPrice(endpoint, series, minimalClocking, maximalClocking, minimalPrice, maximalPrice) {
    router.get(`/${endpoint}`, async (req,res) => {
        const processors = await loadProcessorsCollection();
        res.send(await processors.find ({ processorSeries: series, processorClocking: { $gte: minimalClocking, $lte: maximalClocking }, processorPrice: { $gt: minimalPrice, $lt: maximalPrice }}).toArray());
    })
}

processorsSeriesArray.forEach(series => {
    processorClockingArray.forEach(clocking => {
        processorPriceArray.forEach(price => {
            gettingProcessorBySeriesClockingAndPrice(`${series.endpoint}${clocking.endpoint}${price.endpoint}`, series.series, clocking.minimalClocking, clocking.maximalClocking, price.minimalPrice, price.maximalPrice)
        })
    })
})