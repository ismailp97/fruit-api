// allows request to pass through middleware and get to controllers

const logger = (req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
}

module.exports = logger;