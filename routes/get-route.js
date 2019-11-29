var express = require('express')
var router = express.Router()

router.get('/get:age', function(req, res, next){
    if (req.params.age < 18 || req.params.age == undefined) next('route')
    else next()
}, function(req, res, next){
    res.render('test', { title: 'GET route!' })
})

module.exports = router