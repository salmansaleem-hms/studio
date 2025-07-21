import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'MCS',
    institution: 'KFUEIT',
    years: '2023-2025',
    percentage: '74.25%',
  },
  {
    degree: 'ADS (CS)',
    institution: 'IUB',
    years: '2020-2022',
    percentage: '83.45%',
  },
  {
    degree: 'INTERMEDIATE (I.CS)',
    institution: 'BISE BWP',
    years: '2018-2020',
    percentage: '65%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-muted scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          EDUCATIONAL BACKGROUND
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 mt-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <GraduationCap className="w-5 h-5" />
              </div>
              <Card className="w-[calc(50%-2rem)] shadow-lg hover:shadow-xl transition-shadow duration-300 ml-auto data-[side=left]:ml-0 data-[side=left]:mr-auto" data-side={index % 2 === 0 ? 'right' : 'left'}>
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.years}</p>
                  <p className="font-semibold text-primary">Percentage: {edu.percentage}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
