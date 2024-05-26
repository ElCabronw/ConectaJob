const { get } = require('mongoose');

const candidateService = require('../services/candidateService');

async function getJobsByUserId(req, res,next) {
        await candidateService.getJobsByUserId(req.user).then((users) => res.status(200).json(users)).catch((error) => next(error)); 
}

async function applyToJob(req,res,next){
    const jobParam = req.body;
    jobParam.createdBy = req.userId;
    jobParam.createdAt = new Date();

    await candidateService.applyToJob(jobParam).then((job) => res.status(200).json(job)).catch((error) => next(error));
}

async function getAppliedJobsByUserId(req, res,next) {
    console.log(req.user);
    await candidateService.getAppliedJobsByUserId(req.user).then((users) => res.status(200).json(users)).catch((error) => next(error)); 
}

module.exports = { getJobsByUserId,applyToJob,getAppliedJobsByUserId};