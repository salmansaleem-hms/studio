import { Phone, Mail, Linkedin, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';


const contactDetails = [
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    label: 'Phone / Whatsapp',
    value: '+92 306 9007091',
    href: 'tel:+923069007091',
  },
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    label: 'Email',
    value: 'salmansaleem.7091@gmail.com',
    href: 'mailto:salmansaleem.7091@gmail.com',
  },
  {
    icon: <Linkedin className="w-6 h-6 text-primary" />,
    label: 'LinkedIn',
    value: 'salman-saleem-ab5493202',
    href: 'https://pk.linkedin.com/in/salman-saleem-ab5493202',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    label: 'Address',
    value: 'Room no. 02, 2nd Floor Subhan Boys hostel, near Meezan Bank Ichra Branch Rasoolpura Ichra Lahore',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          CONTACT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.label}</h3>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Get in Touch!</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out.
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Contact Now
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Choose a Contact Method</AlertDialogTitle>
                  <AlertDialogDescription>
                    How would you like to get in touch? You can book a time that works for you or message me directly for a quicker response.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2 sm:gap-2">
                  <AlertDialogAction asChild>
                    <Link href="https://forms.gle/hEf5v7vbi3iMwAK77" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment for Later
                    </Link>
                  </AlertDialogAction>
                  <AlertDialogAction asChild>
                    <Link href="https://wa.me/923089495274" target="_blank" rel="noopener noreferrer">
                       <MessageCircle className="mr-2 h-4 w-4" />
                       Contact Immediately
                    </Link>
                  </AlertDialogAction>
                   <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
