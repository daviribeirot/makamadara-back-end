import { createAttendance, getAttendanceByUserId } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { attendanceSchema } from "@/schemas";
import { Router } from "express";

const attendanceRouter = Router();

attendanceRouter
.all('/*', authenticateToken)
.post('/', validateBody(attendanceSchema), createAttendance)
.get('/', getAttendanceByUserId);

export { attendanceRouter };