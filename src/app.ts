import 'express-async-errors';
import express, { json, Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { attendanceRouter, authenticationRouter, usersRouter } from '@/routers';
import { handleApplicationErrors } from '@/middlewares';

const app = express();
app
    .use(cors())
    .use(json())
    .get('/health', (_req, res) => res.send('OK!'))
    .use('/user', usersRouter)
    .use('/auth', authenticationRouter)
    .use('/attendance', attendanceRouter)
    .use(handleApplicationErrors);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
  }
  
  export async function close(): Promise<void> {
    await disconnectDB();
  }
  
  export default app;