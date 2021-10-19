const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))
app.use(express.json()) // To parse the incoming requests with JSON payloads
fs = require('fs');


app.post('/post', (req, res, next) => {
    fs.writeFile('../srv/public/files/calendar.text', JSON.stringify(req.body), function (err) {
        if (err) return console.log(err);
        let result = (req.body);
        res.status(200).json(result);
    });
});

app.post('/clear', (req, res, next) => {
    fs.writeFile('../srv/public/files/calendar.text', '[]', function (err) {
        if (err) return console.log(err);
        let result = (req.body);
        res.status(200).json(result);
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})