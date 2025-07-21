import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface WorkExperienceProps {
  content: string;
}

const WorkExperience = ({ content }: WorkExperienceProps) => {
  const experiences = content.split('\n\n').map((exp) => {
    const lines = exp.split('\n');
    const title = lines[0];
    const details: { [key: string]: string } = {};
    lines.slice(1).forEach((line) => {
      const [key, ...value] = line.split(':');
      details[key.trim().toLowerCase()] = value.join(':').trim();
    });
    return { title, ...details };
  });

  return (
    <section id="experience" className="py-20 lg:py-32 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          WORK EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Experience:</strong> {exp.experience}
                </p>
                <p>
                  <strong>Duration:</strong> {exp.duration}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
