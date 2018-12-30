const jwt = require('jsonwebtoken');
require('dotenv').load();

exports.loginRequired = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded) {
                return next();
            }
            else {
                return next({ status: 401, message: "Please log in first" });
            }
        });
    }
    catch (e) {
        return next({ status: 401, message: "Please log in first" });
    }
}
exports.ensureCorrectUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthrotized"
                });
            }
        });
    }
    catch (e) {
        return next({
            status: 401,
            message: "unauthrotized"
        });
    }
}