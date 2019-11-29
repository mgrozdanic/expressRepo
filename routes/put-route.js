var express = require('express')
var router = express.Router()

router.put('/put', function(req, res, next) {
    res.render('test', { title: 'PUT route!' })
})

module.exports = router;