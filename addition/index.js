const express = require('express');

const app = express();
const port = 8091

app.post('/api/add', (req, res) => {
    const number1 = +req.query.number1;
    const number2 = +req.query.number2;
    const result = number1 + number2;
    res.json({result});
    console.log(`Addition service called from ${req.ip} with number1=${number1} and number2=${number2}`);
})

app.listen(port, () => {
    console.log(`Addition service listening at http://localhost:${port}`)
})