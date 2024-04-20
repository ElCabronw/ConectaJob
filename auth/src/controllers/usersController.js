const { get } = require('mongoose');
const User = require('../models/User.js');

const userService = require('../services/userService');

async function getAllUsers(req, res,next) {
        await userService.getAllUsers(req.user).then((users) => res.status(200).json(users)).catch((error) => next(error)); 
}

async function getUserById(req, res, next) {
    const userId = req.query.id;
        await userService.getUserById(userId).then((user) => res.status(200).json(user)).catch((error) => next(error));
}

async function updateUser(req, res, next) {
    const userId = req.query.id;
    const user = req.body;
        await userService.updateUser(userId,user).then((user) => res.status(200).json(user)).catch((error) => next(error));
}

async function deleteUser(req, res, next) {
    const userId = req.query.id;
    await userService.deleteUser(userId).then(() => res.status(200).json({message: 'User deleted successfully'})).catch((error) =>  next(error));
}

module.exports = { getAllUsers,getUserById, updateUser, deleteUser};