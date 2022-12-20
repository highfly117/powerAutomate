var express = require('express');
var router = express.Router();





router.get('/', function(req, res, next) {

    const fs = require('fs');

        fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
        });


    res.send('API is working properly');
});





module.exports = router;