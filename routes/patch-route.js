var express = require('express')
var router = express.Router()

router.patch('/patch', function(req, res, next) {
    res.render('test', { title: 'PATCH route!' })
})

module.exports = router;