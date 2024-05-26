const db = require("../helpers/db");
const Job = db.Job;
const Role = require("../../../shared/helpers/role");
const Candidate = require('../models/Candidate');


async function getJobsByUserId(userId) {
    try {
        // Encontrar todos os candidatos associados ao usuário
        const candidates = await Candidate.find({ user: userId }).populate('job');
        
        // Extrair os detalhes dos jobs associados aos candidatos
        const jobs = candidates.map(candidate => candidate.job);

        // Extrair as propriedades desejadas dos jobs
        const formattedJobs = jobs.map(job => ({
            Id: job._id,
            Titulo: job.title,
            Description: job.description,
            Company: job.company,
            employmenttype: job.employmentType
        }));
        
        return formattedJobs;
    } catch (error) {
        console.error('Erro ao buscar os jobs do usuário:', error);
        throw error;
    }
}

async function applyToJob(param) {
    try {
        const jobId = param.jobId;
        const userId = param.userId;
        //check if job exists
        const job = await Job.findById(jobId);
        if (!job) {
            throw 'Job não encontrado.';
        }
        //check if user has already applied to this job
        const existingCandidate = await Candidate.findOne({ job: jobId, user: userId });
        if (existingCandidate) {
            throw 'Você já se candidatou a este job.';
        }
        param.applicationDate = new Date();
        param.status = 'Applied';
        param.user = userId;
        param.job = jobId;
        const candidate = new Candidate(param);
        await candidate.save();
        return candidate.toJSON();
    } catch (error) {
        console.error('Erro ao aplicar para o job:', error);
        throw error;
    }
}

async function getAppliedJobsByUserId(param){
    try {
        const userId = param.userId;
        
        const candidates = await Candidate.find({ user: userId}).populate('job');
        const jobs = candidates.map(candidate => candidate.job);
        const formattedJobs = jobs.map(job => ({
            Id: job._id,
            Titulo: job.title,
            Description: job.description,
            Company: job.company,
            employmenttype: job.employmentType
        }));
        return formattedJobs;
    } catch (error) {
        console.error('Erro ao buscar os jobs do usuário:', error);
        throw error;
    }

}

module.exports = { getJobsByUserId,applyToJob,getAppliedJobsByUserId};