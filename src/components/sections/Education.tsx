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
  {
    degree: 'MATRICULATION',
    institution: 'BISE BWP',
    years: '2015-2017',
    percentage: '69.81%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-muted scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          EDUCATIONAL BACKGROUND
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-8 md:mb-12">
               <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className={index % 2 === 0 ? 'md:col-start-2' : ''}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12 md:ml-0">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
