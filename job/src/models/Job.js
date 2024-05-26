const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        required: false
    },
    employmentType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
        required: true
    },
    postedDate: {
        type: Date,
        default: Date.now
    },
    applicationDeadline: {
        type: Date,
        required: false
    },
    requirements: [{
        type: String,
        required: false
    }],
    responsibilities: [{
        type: String,
        required: false
    }],
    benefits: [{
        type: String,
        required: false
    }],
    contactEmail: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    contactPhone: {
        type: String,
        required: false,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
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
 
jobSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  });

module.exports = mongoose.model('Job', jobSchema);