const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080

const additionServiceUrl = 'http://localhost:8091/api';
const subtractionServiceUrl = 'http://localhost:8092/api';

app.post('/add/:number1/:number2', async (req, res) => {
    try {
        // Make a request to backend1 microservice
        const response = await axios.post(`${additionServiceUrl}/add`, {
            number1: +req.params.number1,
            number2: +req.params.number2
        });
        const dataFromBackend1 = response.data;

        // Send the combined data as the response
        res.json(combinedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.post('/subtract/:number1/:number2', async (req, res) => {
    try {
        // Make a request to backend2 microservice
        const response = await axios.post(`${subtractionServiceUrl}/subtract`, {
            number1: +req.params.number1,
            number2: +req.params.number2
        });
        const dataFromBackend2 = response.data;

        // Send the combined data as the response
        res.json(combinedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.listen(port, () => {
    console.log(`Gateway listening at http://localhost:${port}`)
})