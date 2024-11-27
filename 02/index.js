const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

const password = "password";

app.get("/encode/:text", (req, res) => {
    const text = req.params.text;
    const encodedtext = Vigenere.Cipher(password).crypt(text);
    res.send(encodedtext);
})

app.get("/decode/:text", (req, res) => {
    const text = req.params.text;
    const decodedtext = Vigenere.Decipher(password).crypt(text);
    res.send(decodedtext);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
