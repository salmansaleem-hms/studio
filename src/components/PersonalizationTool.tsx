'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, RotateCcw } from 'lucide-react';
import { personalizeContent, PersonalizeContentInput, PersonalizeContentOutput } from '@/ai/flows/personalize-content';
import { useToast } from '@/hooks/use-toast';

interface PersonalizationToolProps {
  originalContent: {
    aboutMe: string;
    technicalSkills: string;
    workExperience: string;
  };
  onPersonalize: (data: PersonalizeContentOutput | null) => void;
  isPersonalized: boolean;
}

const PersonalizationTool = ({
  originalContent,
  onPersonalize,
  isPersonalized,
}: PersonalizationToolProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePersonalize = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: 'Error',
        description: 'Please paste a job description.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const input: PersonalizeContentInput = {
        jobDescription,
        aboutMe: originalContent.aboutMe,
        technicalSkills: originalContent.technicalSkills,
        workExperience: originalContent.workExperience,
      };
      const result = await personalizeContent(input);
      onPersonalize(result);
      toast({
        title: 'Success!',
        description: 'The content has been personalized to match the job description.',
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Personalization failed:', error);
      toast({
        title: 'Error',
        description: 'Failed to personalize content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    onPersonalize(null);
    setJobDescription('');
    toast({
      title: 'Content Reset',
      description: 'The content has been reset to the original version.',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col sm:flex-row items-center gap-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="rounded-full shadow-lg w-full sm:w-auto">
            <Sparkles className="mr-2 h-5 w-5" />
            Personalize with AI
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Personalize Content with AI</DialogTitle>
            <DialogDescription>
              Paste a job description below to tailor the portfolio content to highlight the most relevant skills and experiences.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Paste the job description here..."
              className="min-h-[200px]"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handlePersonalize}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Personalize
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {isPersonalized && (
         <Button
            variant="outline"
            size="lg"
            className="rounded-full shadow-lg w-full sm:w-auto"
            onClick={handleReset}
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset
          </Button>
      )}
    </div>
  );
};

export default PersonalizationTool;
