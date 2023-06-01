const express = require('express');
const router = express.Router();
const multer = require('multer')
const StreamZip = require('node-stream-zip');
const fs = require('fs')
const request = require('request');


router.post('/', (req, res) => {

    console.log("API test")

    var options = {
        'method': 'GET',
        'url': 'https://api.tomorrow.io/v4/timelines?location=London&fields=temperature&apikey=i0iQBy5pn2PzEj5BMD9ua43GDQkqIEZh',
        'headers': {
        }
    };

    
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.headers);

        // const rateLimitHour = response.headers['X-RateLimit-Limit-hour'];
        // console.log(`X-RateLimit-Limit-hour: ${rateLimitHour}`)

        return res.send(response.body)

    });

});






module.exports = router;