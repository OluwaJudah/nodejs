import { Worker } from 'bullmq';
import { sendWhatsApp } from '@/utils/twilio';
import { Redis } from 'ioredis';

const connection = new Redis();

export const messageWorker = new Worker(
  'messageQueue',
  async job => {
    const { to, message } = job.data;
    await sendWhatsApp(to, message);
  },
  { connection }
);
