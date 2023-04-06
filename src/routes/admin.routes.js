import express from 'express';
import { getUserLists } from "../controllers/admin/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get('/users-list', getUserLists);

export default adminRouter;