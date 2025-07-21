import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'A.I POWERED ATTENDANCE MANAGEMENT SYSTEM VIA WEBCAM',
    tools: ['PYTHON DJANGO', 'SQLITE', 'HTML', 'CSS'],
    description: "Developed a smart attendance system that leverages AI and webcam technology to automate and streamline attendance tracking. This final year project demonstrates practical application of Python, Django, and database management to create a real-world solution."
  };

  return (
    <section id="projects" className="py-16 lg:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          UNIVERSITY PROJECT
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardHeader className="bg-muted flex flex-row items-center gap-4 p-6">
               <div className="p-3 bg-primary/10 rounded-full">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <h3 className="font-semibold mb-3">Tools Used:</h3>
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
