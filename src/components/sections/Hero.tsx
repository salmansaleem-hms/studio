import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] bg-muted overflow-hidden -mt-16 scroll-mt-16 pt-16 md:pt-0"
    >
      <div className="absolute inset-0 bg-grid-slate-200/[0.2] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)] dark:bg-grid-slate-700/[0.2]"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-4">
              SALMAN SALEEM
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-primary mb-6">
              IT OFFICER | ADMIN & TECH COORDINATOR
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8">
              Motivated professional with expertise in administration, digital marketing, and AI-powered solutions.
            </p>
            <Button asChild size="lg">
              <Link href="https://drive.google.com/file/d/1V2zk6Ecx8TSFqZGxFNAFxXFLnxUe7Ccb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                View My Resume
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <Image
                src="https://i.postimg.cc/rstdZtqD/C-V-Photo.png"
                alt="Salman Saleem"
                width={400}
                height={400}
                priority
                className="rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
