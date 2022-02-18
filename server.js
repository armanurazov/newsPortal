PORT = 8080;
const express = require('express');
const Parser = require('rss-parser');
const app = express();

//parse RSS into console

// var dataFromRSS = [];
// var obj = [];




app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

    // let parser = new Parser();
    // (async () => {
    //     let feed = await parser.parseURL('https://lenta.ru/rss/last24');
    //     feed.items.forEach(item => {
    //         dataFromRSS.push('{"title": "' + item.title + '", ' + ' "link": "' + item.link + '"}')
    //     });
    //     for (var i = 0; i < 8; i++) {
    //         obj[i] = JSON.parse(dataFromRSS[i])
    //     }
    //     console.log(obj)
    // })();

    // res.json(obj);
})




app.listen(process.env.PORT || PORT, console.log('Connected to ' + PORT));