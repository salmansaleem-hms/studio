import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section id="experience" className="py-16 lg:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          WORK EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="font-medium text-muted-foreground italic">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary/80 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{res}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
