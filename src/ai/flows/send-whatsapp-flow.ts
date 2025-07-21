'use server';
/**
 * @fileOverview A flow to send a WhatsApp message with contact form data.
 *
 * - sendWhatsapp - A function that handles sending the message.
 * - SendWhatsappInput - The input type for the sendWhatsapp function.
 * - SendWhatsappOutput - The return type for the sendWhatsapp function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import Twilio from 'twilio';

const SendWhatsappInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  message: z.string().describe("The message content."),
});
export type SendWhatsappInput = z.infer<typeof SendWhatsappInputSchema>;

const SendWhatsappOutputSchema = z.object({
  success: z.boolean(),
});
export type SendWhatsappOutput = z.infer<typeof SendWhatsappOutputSchema>;

export async function sendWhatsapp(input: SendWhatsappInput): Promise<SendWhatsappOutput> {
  return sendWhatsappFlow(input);
}

const sendWhatsappFlow = ai.defineFlow(
  {
    name: 'sendWhatsappFlow',
    inputSchema: SendWhatsappInputSchema,
    outputSchema: SendWhatsappOutputSchema,
  },
  async (input) => {
    const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM_NUMBER } = process.env;
    const { name, email, message } = input;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_FROM_NUMBER) {
      console.error('Missing Twilio credentials in .env file');
      throw new Error('Server is not configured for sending WhatsApp messages.');
    }

    const twilioClient = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    
    // Hardcoded recipient phone number
    const toPhoneNumber = 'whatsapp:+923069007091';

    const messageBody = `*New Portfolio Message*\n\n*From:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;

    try {
      await twilioClient.messages.create({
        body: messageBody,
        from: TWILIO_WHATSAPP_FROM_NUMBER,
        to: toPhoneNumber,
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to send WhatsApp message:', error);
      throw new Error('Failed to send the message.');
    }
  }
);
