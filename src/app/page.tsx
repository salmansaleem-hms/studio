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
  technicalSkills: [
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'Python (Django)', 'SQLite'],
    },
    {
      category: 'Digital Marketing',
      skills: ['Facebook & Instagram Ads', 'SEO', 'Social Media Management'],
    },
    {
      category: 'Tools',
      skills: ['MS Office (Word, Excel, PowerPoint)', 'Canva'],
    },
    {
      category: 'Soft Skills',
      skills: ['Leadership', 'Team Training', 'Communication', 'Planning'],
    },
    {
      category: 'Other',
      skills: ['Internet Research', 'Time Management'],
    },
  ],
  workExperience: [
    {
      title: 'Trainer & Operations Manager',
      company: 'Discover Technologies Pvt. Ltd',
      duration: 'May 2024 – May 2025',
      responsibilities: [
        'Conducted professional training sessions on digital marketing and social media advertising.',
        'Managed operations including student admissions, scheduling lectures, and fee processing.',
        'Supervised daily center activities, maintained communication with clients/students, and coordinated between departments.',
      ],
    },
    {
      title: 'Digital Marketing Trainer',
      company: 'Digital Next, Bahawalpur',
      duration: 'Apr 2023 – May 2024',
      responsibilities: [
        'Delivered hands-on training in Facebook/Instagram advertising, SEO, and content strategy.',
        'Assisted in curriculum development and organized marketing workshops for batches of students.',
        'Supported students in developing marketing campaigns and client handling techniques.',
      ],
    },
    {
      title: 'Office Administrator',
      company: 'The Smart School',
      duration: 'Mar 2022 – Feb 2023',
      responsibilities: [
        'Handled administrative duties including staff coordination, student records, and reporting.',
        'Facilitated communication between school administration and parents.',
        'Managed Microsoft Office tools for documentation and academic tracking.',
      ],
    },
  ],
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
          <WorkExperience experiences={originalContent.workExperience} />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up">
          <Skills skills={originalContent.technicalSkills} />
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
