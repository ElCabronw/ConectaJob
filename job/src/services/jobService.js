const db = require("../helpers/db");
const Job = db.Job;
const Role = require("../../../shared/helpers/role");

async function getAllJobs(currentUser){  
    console.log(currentUser);
    if (currentUser.role !== Role.Admin) {
        throw 'Only Admin is Authorized!';
    }
    const jobs = await Job.find();
    return jobs;
}
async function createJob(jobParam) {
  try {
    const newJob =  new Job(jobParam);
    await newJob.save();
    return newJob.toJSON();
  } catch (error) {
    console.error('Erro ao criar um novo job:', error);
  }
}

async function updateJob(id, jobParam){
    try {
        jobParam.updatedAt = new Date();
        const updatedJob = await Job.findByIdAndUpdate(id, jobParam, { new: true });
        if (!updatedJob) {
          return res.status(404).json({ error: 'Job não encontrado' });
        }
        return updatedJob.toJSON();
      } catch (error) {
        console.error('Erro ao atualizar o job:', error);
      }
}

async function getJobById(id) {
    try {
      const jobs = await Job.findById(id);
        if (!jobs) {
            return res.status(404).json({ error: 'Job não encontrado' });
        }
        return jobs.toJSON();
    } catch (error) {
      console.error('Erro ao buscar os jobs:', error);
     
    }
  }

async function deleteJob(jobId) {
 
  try {
    const deletedJob = await Job.findByIdAndDelete(jobId);
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job não encontrado' });
    }
    return true;
  } catch (error) {
    console.error('Erro ao deletar o job:', error);
   return false;
  }
}

module.exports = { getAllJobs,createJob,updateJob,getJobById,getJobById,deleteJob};