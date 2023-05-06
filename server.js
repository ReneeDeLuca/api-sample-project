const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const sampleObject = {
    'Spiderman': {
    "name": "Peter Parker",
    "age": 16,
    "location": "New York, USA"
    },
    'Ironman': {
    "name": "Tony Stark",
    "age": 40,
    "location": "New York, USA"
    },
    'unknown': {
    "name": "unknown",
    "age": 0,
    "location": "unknown"
    }
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(sampleObject);
});

app.get('/api/:name', (req, res) => {
    const sampleName = req.params.name.toLowerCase();
    if (sampleObject[sampleName]) {
        res.json(sampleObject[sampleName]);
    }
    else {
        res.json(sampleObject['unknown']);
    }
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
});