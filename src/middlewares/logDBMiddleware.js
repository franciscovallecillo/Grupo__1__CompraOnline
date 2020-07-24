const fs = require('fs');

function logDBMiddleware(req, res, next){
    fs.appendFileSync('logDB.txt', 'Se creo registro de '+req.url);
    next();
}

module.exports = logDBMiddleware;