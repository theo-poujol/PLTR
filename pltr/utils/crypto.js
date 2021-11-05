const crypto = require('crypto');

const encrypt = (pwd) => {
    let hashedPassword = crypto.createHash('sha256')
                 .update(pwd)
                 .digest('hex');        
    return hashedPassword;
}

module.exports = {encrypt}