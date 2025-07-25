import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_AUTH_TOKEN!);
const FROM_NUMBER = 'whatsapp:+14155238886';

export const sendWhatsApp = async (to: string, body: string) => {
  return await client.messages.create({
    body,
    from: FROM_NUMBER,
    to: `whatsapp:${to}`,
  });
};
