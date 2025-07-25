import { Job } from "bullmq";

const { Worker: BullMQWorker } = require("bullmq");
const Redis = require("ioredis");
const { sendWhatsApp } = require("./utils/twilio");

const connection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null, // ✅ Prevents BullMQ warning
});

const processor = async (job: Job<{ to: string; message: string }>) => {
  const { to, message } = job.data;
  await sendWhatsApp(to, message);
};

const messageWorker = new BullMQWorker("messageQueue", processor, {
  connection,
});
