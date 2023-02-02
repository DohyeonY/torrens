var express = require('express');
var router = express.Router();

// url
router.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/brush/brush.html');
});

router.get('/cam', function (req, res, next) {
    const spawn = require("child_process").spawn;
    const child = spawn('python', ["WebSocket.py"]);

      // Send SIGTERM to process

    setTimeout(function() {child.kill('SIGTERM')}, 10000);
})

module.exports = router;
