var express = require('express')
var router = express.Router()

router.post('/post', function(req, res, next){
    res.render('test', { title: 'POST route!' })
})

module.exports = router;