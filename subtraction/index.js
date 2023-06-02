const express = require('express');

const app = express();
const port = 8092

app.post('/subtract', (req, res) => {
    const number1 = +req.query.number1;
    const number2 = +req.query.number2;
    const result = number1 - number2;
    res.json({result});
})


app.listen(port, () => {
    console.log(`Subtraction service listening at http://localhost:${port}`)
})