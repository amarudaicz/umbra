import { SiteLayout } from '@/components/SiteLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Threadfolio',
  description: 'Get in touch with Threadfolio for inquiries, commissions, or collaborations.',
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-headline font-bold text-center text-primary">Get in Touch</h1>
        <p className="text-lg text-center text-muted-foreground max-w-xl mx-auto">
          I'd love to hear from you! Whether you have questions about my work, are interested in a commission, or just want to say hello, feel free to reach out.
        </p>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            <CardDescription>You can reach me through the following channels:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href="mailto:hello@threadfolio.example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@threadfolio.example.com
                </a>
                <p className="text-sm text-muted-foreground/80">For all inquiries and commissions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
                <p className="text-sm text-muted-foreground/80">Available Monday - Friday, 9am - 5pm.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Studio Location</h3>
                <p className="text-muted-foreground">123 Artisan Way, Fiber City, TX 75001</p>
                <p className="text-sm text-muted-foreground/80">Studio visits by appointment only.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
