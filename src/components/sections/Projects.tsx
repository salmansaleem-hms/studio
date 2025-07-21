import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Lightbulb } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'AI-Powered Attendance Management System via Webcam',
    subtitle: 'Final Year University Project',
    description: [
      'Developed a facial recognition-based attendance system using Python and Django.',
      'Integrated real-time webcam face detection with SQLite database for logging.',
      'Designed a user-friendly frontend using HTML & CSS.',
    ],
    tools: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'OpenCV'],
  };

  return (
    <section id="projects" className="py-16 lg:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          UNIVERSITY PROJECT
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardHeader className="bg-muted p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline">{project.title}</CardTitle>
                  <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4 mb-6">
                {project.description.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary/80 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold mb-3">Tools & Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="default" className="bg-accent text-accent-foreground">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
