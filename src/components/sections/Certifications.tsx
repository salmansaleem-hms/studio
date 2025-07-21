import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  'HIFZ UL QURAN',
  'ENGLISH LANGUAGE & PERSONALITY GROOMING COURSE',
  'DIGITAL MARKETING',
  'MS OFFICE DIPLOMA',
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 lg:py-24 bg-muted scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          CERTIFICATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <Award className="w-12 h-12 text-primary mb-4" />
                <p className="font-semibold text-lg">{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
