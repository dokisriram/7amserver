const express = require('express');
const router = express.Router();
var {getStudentService, regStudentService} = require('../services/studentService')

router.get('/get-std', function (req, res, next) {
    console.log('getstudentcontroller')
    const result = getStudentService(req)
    res.send(result)
})

/**
 * url: http://localhost:2020/std/reg-std
 * method: post
 * data: {}
 */

router.post('/reg-std',async function(req, res, next){
    const result = await regStudentService(req)
    res.send(result);
})
module.exports = router