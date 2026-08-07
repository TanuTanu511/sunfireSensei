import express from 'express';
import authenticationToken from '../middleware/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../Controllers/jobController.js';

const router = express.Router();

router.route("/post").post(authenticationToken, postJob);
router.route("/get").get(authenticationToken, getAllJobs);
router.route("/getadminjobs").get(authenticationToken, getAdminJobs);
router.route("/get/:id").get(authenticationToken,getJobById);

export default router;