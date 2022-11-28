const fs = require('fs')
function logEventCreate(req, res, next){
    fs.appendFileSync('logEventCreate.txt', "O evento: " + req.body.event + "foi criado na url: " + req.url)

    next();

}
module.exports = logEventCreate