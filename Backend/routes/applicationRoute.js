import express from 'express';
import authenticationToken from '../middleware/isAuthenticated.js';
import { applyJobs, getApplicants, getAppliedJobs, updateStatus } from '../Controllers/applicationController.js';
const router = express.Router();

router.route("/apply/:id").get(authenticationToken, applyJobs);
router.route("/get").get(authenticationToken, getAppliedJobs);
router.route("/:id/applicants").get(authenticationToken, getApplicants);
router.route("/status/:id/update").post(authenticationToken, updateStatus);

export default router;