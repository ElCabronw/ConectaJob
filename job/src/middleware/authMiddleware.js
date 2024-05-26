const jwt = require('jsonwebtoken');
const { authKey,publicKey } = require('../config/index');


function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
    const decoded = jwt.verify(token, authKey); 
    req.userId = decoded.userId;
    req.userRole = decoded.userRole;
    req.user = decoded;
    next();
    } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
    }

 };

module.exports = verifyToken;