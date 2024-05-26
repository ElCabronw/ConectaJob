const mongoose = require('mongoose');

// Definindo o esquema para os candidatos
const candidateSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job', // Referência ao documento de Job
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referência ao documento de User
        required: true
    },
    applicationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Applied', 'Interviewing', 'Hired', 'Rejected'],
        default: 'Applied'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
candidateSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  });

module.exports = mongoose.model('Candidate', candidateSchema);
