'use server';
/**
 * @fileOverview A flow to send an email with contact form data.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 * - SendEmailOutput - The return type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as nodemailer from 'nodemailer';

const SendEmailInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  message: z.string().describe("The message content."),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    const { GMAIL_EMAIL, GMAIL_APP_PASSWORD } = process.env;
    const { name, email, message } = input;

    if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials in .env file');
      throw new Error('Server is not configured for sending emails.');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_EMAIL,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'salmansaleem.7091@gmail.com',
      subject: `New Message from ${name} via Portfolio`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Portfolio Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      // In a real app, you might want to throw a more specific error
      // that the client can interpret, but for now we'll throw a generic one.
      throw new Error('Failed to send the message.');
    }
  }
);
