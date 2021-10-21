const jwt = require('jsonwebtoken');

function verify(req, res, next) {
    const authHeader = req.headers.token;
    
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json({message: 'Token is Not Valid.'});

            req.user = user;
            next();
        })
    } else {
        res.status(403).json({message: 'You are not authenicated.'});   
    }
}

module.exports = verify;