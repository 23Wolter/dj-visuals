var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
    res.cookie('user', '', { expires: new Date(0) });

    res.render('index', { title: 'Dj Wolter' });
});



// START OF THE GAME
// router.post('/start_game', function(req, res) {
// }


module.exports = router;