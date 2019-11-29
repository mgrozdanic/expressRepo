var express = require('express')
var router = express.Router()

router.get('/get', function(req, res, next){
    res.render('test', { title: 'GET route!' })
})

module.exports = router