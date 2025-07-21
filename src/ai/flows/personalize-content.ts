'use server';

/**
 * @fileOverview A content personalization AI agent.
 *
 * - personalizeContent - A function that handles the content personalization process.
 * - PersonalizeContentInput - The input type for the personalizeContent function.
 * - PersonalizeContentOutput - The return type for the personalizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeContentInputSchema = z.object({
  jobDescription: z.string().describe('The job description to match Salman Saleem to.'),
  aboutMe: z.string().describe('The original about me section.'),
  technicalSkills: z.string().describe('The original technical skills section.'),
  workExperience: z.string().describe('The original work experience section.'),
});
export type PersonalizeContentInput = z.infer<typeof PersonalizeContentInputSchema>;

const PersonalizeContentOutputSchema = z.object({
  personalizedAboutMe: z.string().describe('The personalized about me section.'),
  personalizedTechnicalSkills: z.string().describe('The personalized technical skills section.'),
  personalizedWorkExperience: z.string().describe('The personalized work experience section.'),
});
export type PersonalizeContentOutput = z.infer<typeof PersonalizeContentOutputSchema>;

export async function personalizeContent(input: PersonalizeContentInput): Promise<PersonalizeContentOutput> {
  return personalizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeContentPrompt',
  input: {schema: PersonalizeContentInputSchema},
  output: {schema: PersonalizeContentOutputSchema},
  prompt: `You are an expert at tailoring portfolio content to match specific job descriptions.

You will receive a job description and Salman Saleem's current portfolio content.
Your task is to rewrite the content to highlight the skills and experiences that are most relevant to the job description.

Job Description: {{{jobDescription}}}

Original About Me: {{{aboutMe}}}

Original Technical Skills: {{{technicalSkills}}}

Original Work Experience: {{{workExperience}}}

Rewrite the content to emphasize the skills and experiences that align with the job description. Maintain a professional and engaging tone.

Output the personalized content in the following format:
{
  "personalizedAboutMe": "",
  "personalizedTechnicalSkills": "",
  "personalizedWorkExperience": ""
}
`,
});

const personalizeContentFlow = ai.defineFlow(
  {
    name: 'personalizeContentFlow',
    inputSchema: PersonalizeContentInputSchema,
    outputSchema: PersonalizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
