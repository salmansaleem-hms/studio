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
    "I am a motivated and reliable IT professional with over 3 years of experience in IT support, system maintenance, and secure operations, particularly in demanding and fast-paced environments. My background includes administrative coordination, technical training, and management of web-based systems, always with a focus on accuracy, efficiency, and security.\n\nAlongside my professional experience, I completed a final year project on an AI-powered Attendance Management System using Python and Django, showcasing my ability to deliver innovative, real-world software solutions. I am also certified in Digital Marketing, MS Office, and Professional Communication, which complements my technical skills with strong communication and cross-functional team coordination capabilities.\n\nWith a passion for technology and a track record of maintaining seamless IT operations, I bring a unique blend of tech expertise, training acumen, and strategic support to every project I take on.",
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
      skills: [
        'Problem Solving',
        'Communication',
        'Team Collaboration',
        'Leadership & Training',
        'Adaptibility',
      ],
    },
    {
      category: 'Other',
      skills: ['Internet Research', 'Time Management', 'Customer Service'],
    },
  ],
  workExperience: [
    {
      title: 'Digital Marketing Trainer',
      company: 'Digital Next, Bahawalpur',
      duration: 'Mar 2025 – Present',
      responsibilities: [
        'Delivered hands-on training in Facebook/Instagram advertising, SEO, and content strategy.',
        'Assisted in curriculum development and organized marketing workshops for batches of students.',
        'Supported students in developing marketing campaigns and client handling techniques.',
      ],
    },
    {
      title: 'Trainer & Operations Manager',
      company: 'Discover Technologies Pvt. Ltd',
      duration: 'Sep 2023 – Mar 2024',
      responsibilities: [
        'Conducted professional training sessions on digital marketing and social media advertising.',
        'Managed operations including student admissions, scheduling lectures, and fee processing.',
        'Supervised daily center activities, maintained communication with clients/students, and coordinated between departments.',
      ],
    },
    {
      title: 'Office Administrator',
      company: 'The Smart School',
      duration: 'Sep 2022 – Feb 2023',
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
