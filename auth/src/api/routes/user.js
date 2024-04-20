const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/authMiddleware');
const usersController = require('../../controllers/usersController');
// Protected route
router.get('/', verifyToken, async (req, res,next) => {
    //get all users
    await usersController.getAllUsers(req,res,next);
});
router.get('/getById', verifyToken, async (req, res,next) => {
    //get all users
    await usersController.getUserById(req,res,next);
});

router.put('/update', verifyToken, async (req, res,next) => { 
    await usersController.updateUser(req,res,next);
});

router.delete('/delete', verifyToken, async (req, res,next) => {
    await usersController.deleteUser(req,res,next);
});


module.exports = router;