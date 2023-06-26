import { Attendance } from "@prisma/client";
import { attendanceRepository } from "@/repositories/attendance-repository";
import { notFoundError } from "@/errors";

async function createAttendance(userId: number, name: string, description: string): Promise<Attendance> {
  
    const attendanceData = {
        userId,
        name,
        description
    }

    const attendance = await attendanceRepository.create(attendanceData);
  
    return attendance;
}

async function getAttendanceByUserId(userId: number) {

    const attendance = await attendanceRepository.findAttendanceByUserId(userId);

    if (!attendance) throw notFoundError();

    return attendance;
}

const attendanceService = {
    createAttendance,
    getAttendanceByUserId,
}

export default attendanceService;