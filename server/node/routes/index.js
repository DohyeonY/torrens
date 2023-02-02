const express = require('express');
const router = express.Router();
const fs = require('fs')

// url
router.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index/index.html');
});

router.get('/wait', function (req, res, next) {
    // let today = new Date();
    // let hour = today.getHours();
    // let timetable = []
    // let img = document.querySelector('img')

    // fs.readFile('../timetable.txt', (err, data) => {
    //     if (err) throw err;
    //     timetable = data.toString().split(',')
    //     timetable.forEach(v => {
    //         let tmp = v.split('/')
    //         if (parseInt(tmp[0]) === hour) {
    //             img.src = './images/' + tmp[1] + '.png'
    //         }
    //     })
    // })
    res.sendFile(__dirname + '/index/wait.html');
});

router.get('/main', function (req, res, next) {
    res.sendFile(__dirname + '/index/main.html');
});

module.exports = router;
