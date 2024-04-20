const express = require('express');
 const router = express.Router();
 const User = require('../../models/User');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
 const authController = require('../../controllers/authController');
// User registration
router.post('/register', async (req, res) => {
    await authController.register(req, res);
  });

// User login
 router.post('/login',async (req, res) => {
    await authController.login(req, res);
  });


module.exports = router;