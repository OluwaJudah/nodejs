require("dotenv").config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendWhatsApp(to: string, message: string) {
  return await client.messages.create({
    body: message,
    from: `whatsapp:${process.env.FROM_WHATSAPP}`, // Your Twilio sandbox or WhatsApp number
    to: `whatsapp:${to}`,
  });
}

module.exports = { sendWhatsApp };
