const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Api endpoints

const processors = require('./routes/api/processors');
app.use('/api/processors', processors);

const graphicCards = require('./routes/api/graphicCards');
app.use('/api/graphicCards', graphicCards);

const motherboards = require('./routes/api/motherboard');
app.use('/api/motherboards', motherboards);

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});

