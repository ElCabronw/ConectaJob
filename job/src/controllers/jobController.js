const { get } = require('mongoose');

const jobService = require('../services/jobService');

async function getAllJobs(req, res,next) {
        await jobService.getAllJobs(req.user).then((users) => res.status(200).json(users)).catch((error) => next(error)); 
}

async function getJobById(req, res,next) {
    const jobId = req.query.id;
    await jobService.getJobById(jobId).then((job) => res.status(200).json(job)).catch((error) => next(error)); 
}

async function createJob(req,res,next){
    const jobParam = req.body;
    jobParam.createdBy = req.userId;
    jobParam.createdAt = new Date();

    await jobService.createJob(jobParam).then((job) => res.status(200).json(job)).catch((error) => next(error));
}

async function updateJob(req, res, next) {
    const jobId = req.query.id;
    const job = req.body;
        await jobService.updateJob(jobId,job).then((job) => res.status(200).json(job)).catch((error) => next(error));
}

async function deleteJob(req, res, next) {
    const jobId = req.query.id;
    await jobService.deleteJob(jobId).then(() => res.status(200).json({message: 'Job deleted successfully'})).catch((error) =>  next(error));
}

module.exports = { getAllJobs,createJob,updateJob,getJobById,deleteJob};