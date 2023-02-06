const express = require('express');
const router = express.Router();
const fs = require('fs')

// url
router.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index/index.html');
});

router.get('/wait', function (req, res, next) {
    res.sendFile(__dirname + '/index/wait.html');
});

router.get('/main', function (req, res, next) {
    res.sendFile(__dirname + '/index/main.html');
});

router.get('/main/send', function (req, res, next) {
    fs.readFile("timetable.txt", (err, data) => {
        timetable = data.toString().split(',')
        const a = {}
        timetable.forEach(v => {
            let tmp = v.split('/')
            a[tmp[0]] = tmp[1]
        })
        res.json(a);
    })
});

module.exports = router;
