const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var { getStudentService, regStudentService, loginService } = require('../services/studentService')
var validateToken = require('../../common/validateToken')

router.get('/get-std',
    validateToken,
    async function (req, res, next) {
        console.log('getstudentcontroller')
        const result = await getStudentService(req)
        res.send(result)
    })

router.get('/get-std-by-id',
    validateToken,
    function () {

    })

/**
 * url: http://localhost:2020/std/reg-std
 * method: post
 * data: {}
 */

router.post('/reg-std', async function (req, res, next) {
    const result = await regStudentService(req)
    res.send(result);
})

router.post("/login", async function (req, res, next) {
    const response = await loginService(req);
    res.send(response)
})
module.exports = router