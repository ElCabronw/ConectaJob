const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/authMiddleware');
const jobController = require('../../controllers/jobController');
// Protected route
router.get('/',verifyToken, async (req, res,next) => {
    //get all users
    await jobController.getAllJobs(req,res,next);
});

router.post('/createJob',verifyToken, async (req, res,next) => {
    //create user
    await jobController.createJob(req,res,next);
});

router.put('/updateJob',verifyToken, async (req, res,next) => {
    //update user
    await jobController.updateJob(req,res,next);
}); //update user

router.get('/getJobById',verifyToken, async (req, res,next) => {
    //get user by id
    await jobController.getJobById(req,res,next);
});

router.delete('/deleteJob',verifyToken, async (req, res,next) => {
    //delete user
    await jobController.deleteJob(req,res,next);
});

module.exports = router;