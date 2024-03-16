const jwt = require('jsonwebtoken')

function validateToken(req, res, next) {
    const token = req.headers.authorization;
    try {
        if (token) {
            jwt.verify(token, "myToken", function (e, s) {
                if (s) {
                    next();
                } else {
                    res.send('Invalid Token')
                }
            })
        } else {
            res.send('token missing')
        }
    } catch (error) {
        console.error("validateToken",error)
    }
}

module.exports = validateToken