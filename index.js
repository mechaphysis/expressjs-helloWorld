var express = require('express')
var app = express();

app.get('/', (req, res) =>{
    res.json({ appType: 'Hello World' });
});

app.listen(3000, () => {
    console.log('Hello world app listening on port 3000!');
});