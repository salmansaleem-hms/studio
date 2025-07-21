import {
  Code2,
  Megaphone,
  Briefcase,
  Cpu,
  MessageCircle,
  LucideProps,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface SkillsProps {
  content: string;
}

const iconMap: Record<string, React.ElementType<LucideProps>> = {
  'Web Development': Code2,
  'Digital Marketing Tools': Megaphone,
  'Office & Admin Tools': Briefcase,
  'Project Implementation': Cpu,
  'Training & Communication': MessageCircle,
};

const Skills = ({ content }: SkillsProps) => {
  const skillsList = content
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((skill) => {
      const [title, ...description] = skill.split(':');
      return {
        title: title.trim(),
        description: description.join(':').trim(),
        Icon: iconMap[title.trim()] || Code2,
      };
    });

  return (
    <section id="skills" className="py-16 lg:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsList.map(({ title, description, Icon }, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
