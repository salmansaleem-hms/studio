import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AboutMeProps {
  content: string;
}

const AboutMe = ({ content }: AboutMeProps) => {
  const hobbies = ['Learning New Technologies', 'Internet Researching', 'Playing Badminton'];

  return (
    <section id="about" className="py-16 lg:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          ABOUT ME
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-lg leading-relaxed text-card-foreground/80 mb-8 text-justify space-y-4">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <Badge key={hobby} variant="secondary" className="text-sm">
                    {hobby}
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

export default AboutMe;
