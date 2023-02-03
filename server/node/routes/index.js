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

module.exports = router;
