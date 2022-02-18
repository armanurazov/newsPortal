PORT = 8000;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, console.log('Connected to ' + PORT));