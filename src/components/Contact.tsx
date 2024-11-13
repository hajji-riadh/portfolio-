import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Add your EmailJS configuration here
    // For demo purposes, we'll just show a success toast
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Your Name"
        required
        className="bg-background"
      />
      <Input
        type="email"
        placeholder="Your Email"
        required
        className="bg-background"
      />
      <Textarea
        placeholder="Your Message"
        required
        className="min-h-[150px] bg-background"
      />
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}