// controllers/authController.js
const authService = require('../services/authService');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const Role = require("../helpers/role");
const jwt = require("../helpers/jwt");
// Rota de Cadastro
async function register(req, res, next) {
    await authService.register(req.body).then((user) => res.json({
        user: user,
        message: `User Registered successfully with email ${req.body.email}`,
      })).catch((error) => next(error));
}

// Rota de login
async function login(req, res, next) {
    try {
        const { username, password } = req.body;
       await authService.login(req.body).then((token) => res.status(200).json({ token })).catch((error) => next(error));    
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Login failed' });
    }
}

module.exports = { login,register };
