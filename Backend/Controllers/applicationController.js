import { Application } from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";

export const applyJobs = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "Invalid Job id", success: false });
    }

    //check if the user already has applied for this job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res
        .status(400)
        .json({
          message: "You have already applied for this job",
          success: false,
        });
    }

    //check if the job exist or not
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({ message: "Job not found", success: false });
    }

    //create a new application for user
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.application.push(newApplication._id);
    await job.save();

    return res
      .status(200)
      .json({ message: "Application submitted", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });

    if (!application) {
      return res
        .status(400)
        .json({ message: "No application", success: false });
    }

    return res.status(200).json({ application, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

//it is for the admin to check how many applicants applied for this job
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant", options: { sort: { createdAt: -1 } } },
    });
    if (!job) {
      return res.status(400).json({ message: "No job found", success: false });
    }

    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res
        .status(400)
        .json({ message: "Invalid status", success: false });
    }

    const application = await Application.findById({ _id: applicationId });
    if (!application) {
      return res
        .status(400)
        .json({ message: "Application not found", success: false });
    }

    //update the status
    application.status = status;
    await application.save();

    return res
      .status(200)
      .json({ message: "Application status updated", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};
