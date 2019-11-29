var express = require('express')
var router = express.Router()

router.delete('/delete', function(req, res, next) {
    res.render('test', { title: 'DELETE route!' })
})

module.exports = router