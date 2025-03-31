import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Headphones, Mail, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import { createTranslator } from 'next-intl';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = await createTranslator({ locale, messages });

  return {
    title: 'Contact Us - Bet4yaar | 24/7 Customer Support',
    description: 'Get in touch with Bet4yaar customer support. Available 24/7 via live chat, email, and phone. Quick response guaranteed.',
    keywords: 'bet4yaar support, casino customer service, betting help india, contact bet4yaar',
    openGraph: {
      title: 'Contact Us - Bet4yaar | 24/7 Customer Support',
      description: 'Get in touch with Bet4yaar customer support. Available 24/7 via live chat, email, and phone. Quick response guaranteed.',
      type: 'website',
      url: 'https://bet4yaar.com/contact',
      images: [
        {
          url: 'https://bet4yaar.com/images/contact-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact Bet4yaar Support'
        }
      ]
    },
    alternates: {
      canonical: 'https://bet4yaar.com/contact',
      languages: {
        'en-IN': '/en/contact',
        'hi-IN': '/hi/contact'
      }
    }
  };
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/ContactPage">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6" itemProp="name">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" itemScope itemType="https://schema.org/Organization">
            <Card className="p-6 text-center" itemScope itemType="https://schema.org/ContactPoint">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2" itemProp="contactType">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4" itemProp="email">
                support@bet4yaar.com
              </p>
              <p className="text-sm text-muted-foreground">
                Response within 2 hours
              </p>
              <meta itemProp="availableLanguage" content="English, Hindi" />
            </Card>

            <Card className="p-6 text-center" itemScope itemType="https://schema.org/ContactPoint">
              <Headphones className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2" itemProp="contactType">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4" itemProp="availableLanguage">
                Available 24/7
              </p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
              <meta itemProp="availableLanguage" content="English, Hindi" />
            </Card>

            <Card className="p-6 text-center" itemScope itemType="https://schema.org/Place">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2" itemProp="name">Office</h3>
              <p className="text-sm text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Mumbai</span>,{' '}
                <span itemProp="addressRegion">Maharashtra</span>{' '}
                <span itemProp="addressCountry">India</span>
              </p>
            </Card>
          </div>

          <Card className="p-8" itemScope itemType="https://schema.org/ContactForm">
            <h2 className="text-2xl font-semibold mb-6" itemProp="name">Send Us a Message</h2>
            <form className="space-y-6" itemProp="target">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here"
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="mt-12 prose max-w-none" itemScope itemType="https://schema.org/FAQPage">
            <h2>Frequently Asked Questions</h2>
            
            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">What are your support hours?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Our customer support team is available 24/7, including holidays.
                  We aim to respond to all inquiries within 2 hours.
                </p>
              </div>
            </div>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">How can I verify my account?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Account verification can be completed through your profile dashboard.
                  Simply upload the required documents and our team will verify them
                  within 24 hours.
                </p>
              </div>
            </div>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">What languages do you support?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  We provide customer support in English, Hindi, and several other
                  Indian regional languages.
                </p>
              </div>
            </div>
          </div>
          
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CustomerService",
              "name": "Bet4yaar Customer Support",
              "url": "https://bet4yaar.com/contact",
              "telephone": "+91-XXXXXXXXXX",
              "email": "support@bet4yaar.com",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "availableLanguage": ["English", "Hindi"],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "support@bet4yaar.com",
                  "availableLanguage": ["English", "Hindi"],
                  "contactOption": "TollFree",
                  "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00"
                }
              ],
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "India"
                }
              }
            })
          }} />
        </div>
      </div>
    </main>
  );
}