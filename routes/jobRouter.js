import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  editJob,
  deleteJob,
} from "../controllers/jobController.js";

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

// router.get('/',getAllJobs)
// router.post('/',createJob)

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, editJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
