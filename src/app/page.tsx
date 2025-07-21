'use client';

import { useState } from 'react';
import type { PersonalizeContentOutput } from '@/ai/flows/personalize-content';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import Education from '@/components/sections/Education';
import WorkExperience from '@/components/sections/WorkExperience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import PersonalizationTool from '@/components/PersonalizationTool';

const originalContent = {
  aboutMe:
    'Motivated professional with experience in administration, digital marketing training, and management roles. Skilled in communication, leadership, and technical development, with a final year project on an AI-based attendance system using Python and Django. Certified in digital marketing, MS Office, and communication, combining tech expertise with training and team coordination abilities.',
  technicalSkills: `Web Development: Hands-on experience with HTML, CSS, and Python Django for creating dynamic and responsive web applications.
Digital Marketing Tools: Experience in executing marketing strategies using social media platforms, SEO techniques, and content planning.
Office & Admin Tools: Proficient in MS Office (Word, Excel, PowerPoint) for documentation, reporting, and communication tasks.
Project Implementation: Applied AI and webcam integration in real-world academic project development and testing.
Training & Communication: Skilled in delivering training sessions and communicating with clients or students through various channels (calls, emails, visits).`,
  workExperience: `TRAINER & OPERATIONS MANAGER
COMPANY: DISCOVER TECHNOLOGIES PVT. LTD
EXPERIENCE: 1 YEARS
DURATION: MAY 2024-MAY 2025

DIGITAL MARKETING TRAINER
COMPANY: DIGITAL NEXT, BWP
EXPERIENCE: 1 YEARS
DURATION: APR 2023-MAY 2024

OFFICE ADMINISTRATOR
COMPANY: THE SMART SCHOOL
EXPERIENCE: 1 YEARS
DURATION: MAR 2022- FEB 2023`,
};

export default function Home() {
  const [personalizedContent, setPersonalizedContent] = useState<PersonalizeContentOutput | null>(
    null
  );

  const handlePersonalize = (data: PersonalizeContentOutput | null) => {
    setPersonalizedContent(data);
  };

  const currentContent = {
    aboutMe: personalizedContent?.personalizedAboutMe || originalContent.aboutMe,
    technicalSkills:
      personalizedContent?.personalizedTechnicalSkills || originalContent.technicalSkills,
    workExperience:
      personalizedContent?.personalizedWorkExperience || originalContent.workExperience,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutMe content={currentContent.aboutMe} />
        <Education />
        <WorkExperience content={currentContent.workExperience} />
        <Skills content={currentContent.technicalSkills} />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <PersonalizationTool
        originalContent={originalContent}
        onPersonalize={handlePersonalize}
        isPersonalized={!!personalizedContent}
      />
    </div>
  );
}
