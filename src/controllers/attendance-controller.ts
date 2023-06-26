import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import attendanceService from '@/services/attendance-service';

export async function createAttendance(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;  
  const { name, description } = req.body;

  try {
    const attendance = await attendanceService.createAttendance(userId, name, description);
    return res.status(httpStatus.CREATED).send({
        name: attendance.name,
        description: attendance.description
    });
  } catch (error) {
    next(error);
  }
}

export async function getAttendanceByUserId(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  
  try {
    const attendance = await attendanceService.getAttendanceByUserId(userId);
    
    return res.status(httpStatus.OK).send(attendance);
  } catch (error) {
    next(error);
  }
}