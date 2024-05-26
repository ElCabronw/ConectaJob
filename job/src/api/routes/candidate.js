const express = require('express');
 const router = express.Router();
 const candidateController = require('../../controllers/candidateController');
 const verifyToken = require('../../middleware/authMiddleware');
// User registration
router.post('/getJobsByUserId', async (req, res, next) => {
    await candidateController.getJobsByUserId(req, res, next);
  });

router.post('/applyToJob', async (req, res, next) => {
    await candidateController.applyToJob(req, res, next);
});

router.get('/getAppliedJobsByUserId',verifyToken, async (req, res, next) => {
    await candidateController.getAppliedJobsByUserId(req, res, next);
});

module.exports = router;