import { Attendance } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
  };

  export type AttendanceData = Omit<Attendance, 'id' | 'createdAt' | 'updatedAt'>;