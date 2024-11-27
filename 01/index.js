const express = require('express');
const app = express();
const port = 8000;

app.get('/:input', (req, res) => {
    const input = req.params.input;
   res.send(input);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})