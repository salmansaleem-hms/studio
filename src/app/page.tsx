'use client';

import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import Education from '@/components/sections/Education';
import WorkExperience from '@/components/sections/WorkExperience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';

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
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AnimatedSection animationType="fade-in-up">
          <Hero />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-left">
          <AboutMe content={originalContent.aboutMe} />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-right">
          <Education />
        </AnimatedSection>
        <AnimatedSection animationType="zoom-in">
          <WorkExperience content={originalContent.workExperience} />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up">
          <Skills content={originalContent.technicalSkills} />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-left">
          <Projects />
        </AnimatedSection>
        <AnimatedSection animationType="zoom-out">
          <Certifications />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-right">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
