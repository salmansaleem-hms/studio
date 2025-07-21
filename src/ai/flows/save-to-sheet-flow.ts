'use server';
/**
 * @fileOverview A flow to save contact form data to a Google Sheet.
 *
 * - saveToSheet - A function that handles saving the data.
 * - SaveToSheetInput - The input type for the saveToSheet function.
 * - SaveToSheetOutput - The return type for the saveToSheet function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { google } from 'googleapis';

const SaveToSheetInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  message: z.string().describe("The message content."),
});
export type SaveToSheetInput = z.infer<typeof SaveToSheetInputSchema>;

const SaveToSheetOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});
export type SaveToSheetOutput = z.infer<typeof SaveToSheetOutputSchema>;

export async function saveToSheet(input: SaveToSheetInput): Promise<SaveToSheetOutput> {
  return saveToSheetFlow(input);
}

const saveToSheetFlow = ai.defineFlow(
  {
    name: 'saveToSheetFlow',
    inputSchema: SaveToSheetInputSchema,
    outputSchema: SaveToSheetOutputSchema,
  },
  async (input) => {
    const {
      GOOGLE_SHEETS_CLIENT_EMAIL,
      GOOGLE_SHEETS_PRIVATE_KEY,
      GOOGLE_SHEET_ID,
    } = process.env;

    if (!GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error('Missing Google Sheets credentials in .env file');
      return { success: false, error: 'Server is not configured for Google Sheets.' };
    }

    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
          // The private key needs to have its newlines restored.
          private_key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const { name, email, message } = input;
      const timestamp = new Date().toISOString();

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: 'A1:D1', // The range to start appending from.
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[timestamp, name, email, message]],
        },
      });
      
      if (response.status === 200) {
        return { success: true };
      } else {
        return { success: false, error: 'Failed to append data to the sheet.' };
      }
    } catch (error) {
      console.error('Failed to save to Google Sheet:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, error: `Failed to save message. ${errorMessage}` };
    }
  }
);
