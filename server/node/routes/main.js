const express = require('express');
const router = express.Router();
const fs = require('fs')


router.get('/send', function (req, res, next) {
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
