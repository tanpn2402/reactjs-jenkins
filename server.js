var express = require('express');
const path = require('path');

var app = express();

app.use(express.static('build'));

app.get('*', async (req, res, next) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

var server = app.listen(5650, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
