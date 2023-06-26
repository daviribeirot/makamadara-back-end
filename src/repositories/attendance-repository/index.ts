import { prisma } from "@/config";
import { AttendanceData } from "@/protocols";

async function create({ userId, name, description }: AttendanceData) {
    return prisma.attendance.create({
        data: {
            userId,
            name,
            description,
        }
    });
}

async function findAttendanceByUserId(userId: number) {
    return prisma.attendance.findMany({
        where: {
            userId,
        }
    });
}

export const attendanceRepository = {
    create,
    findAttendanceByUserId
}