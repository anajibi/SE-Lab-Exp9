const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 8080

const base = process.env.BACKEND_BASE || 'http://localhost';

const additionServiceUrl = `${base}:8091/api`
const subtractionServiceUrl = `${base}:8092/api`

app.use(cors());
app.post('/api/add/:number1/:number2', async (req, res) => {
    console.log(`Gateway service called from ${req.ip} with number1=${req.params.number1} and number2=${req.params.number2}`)
    try {
        // Make a request to backend1 microservice
        const response = await axios.post(`${additionServiceUrl}/add`, null, {
            params: {
                number1: +req.params.number1,
                number2: +req.params.number2
            }
        });
        const dataFromBackend1 = response.data;
        console.log(`Backend1 service returned ${JSON.stringify(dataFromBackend1)}`);

        // Send the combined data as the response
        res.json(dataFromBackend1);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.post('/api/subtract/:number1/:number2', async (req, res) => {
    console.log(`Gateway service called from ${req.ip} with number1=${req.params.number1} and number2=${req.params.number2}`)
    try {
        // Make a request to backend2 microservice
        const response = await axios.post(`${subtractionServiceUrl}/subtract`, null, {
            params: {
                number1: +req.params.number1,
                number2: +req.params.number2
            }
        });
        const dataFromBackend2 = response.data;
        console.log(`Backend2 service returned ${JSON.stringify(dataFromBackend2)}`);
        // Send the combined data as the response
        res.json(dataFromBackend2);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


app.listen(port, () => {
    console.log(`Gateway listening at http://localhost:${port}`)
})