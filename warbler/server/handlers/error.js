function errorHandler(error, res, res, next){
    return res.status(error.status || 500).json({
        error:{
            message: error.message || "Oops! Something went wrong. Be sure we are looking into it."
        }
    })
}
module.exports = errorHandler;