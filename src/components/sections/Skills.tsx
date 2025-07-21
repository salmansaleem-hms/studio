import {
  Code2,
  Megaphone,
  Briefcase,
  Users,
  Clock,
  CheckCircle,
  LucideProps,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const iconMap: Record<string, React.ElementType<LucideProps>> = {
  'Web Development': Code2,
  'Digital Marketing': Megaphone,
  'Tools': Briefcase,
  'Soft Skills': Users,
  'Other': Clock,
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="py-16 lg:py-24 scroll-mt-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {skills.map(({ category, skills }, index) => {
            const Icon = iconMap[category] || CheckCircle;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                       <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
