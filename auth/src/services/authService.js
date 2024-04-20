const jwt = require('jsonwebtoken');
const { authKey,publicKey } = require('../config/index');
const db = require("../helpers/db");
const User = db.User;
const bcrypt = require('bcrypt');

function generateToken(payload) {
    // SIGNING OPTIONS
    var signOptions = {
    expiresIn:  "1h"
    };
    return jwt.sign(payload, authKey, signOptions); // Expira em 1 hora
}

function verifyToken(token) {
    var verifyOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "1h"
       };
  return jwt.verify(token, publicKey,verifyOptions);
}

async function register(userParam) {
    try {

        const user = new User(userParam);
        console.log(userParam);
        if (userParam.password) {
            const hashedPassword = await bcrypt.hash(userParam.password, 10);
            user.password = hashedPassword;
          }
          await user.save();

        } catch (error) {
        console.log(error);
        }
}

async function login(credentials) {
    try {
        const { username, password } = credentials;
        const user = await User.findOne({ username });
        if (!user) {
        throw 'Authentication failed';
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw "Username or password is incorrect." ;
        }
        // Gera um token JWT com o id do usuário
        const token = generateToken({ userId: user.id, role: user.role });
        return token;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { generateToken, verifyToken,register,login };
