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