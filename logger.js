// allows request to pass through middleware and get to controllers

const logger = () => {
    console.log(req.method, req.originalUrl);
    next();
}

module.exports = logger;