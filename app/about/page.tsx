import { Card } from '@/components/ui/card';
import { Shield, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bet4yaar - Leading Indian Online Casino & Sports Betting Platform',
  description: 'Learn about Bet4yaar, India\'s trusted online casino and sports betting platform. Licensed, secure, and committed to responsible gaming.',
  keywords: 'bet4yaar about, indian casino company, online betting platform, responsible gaming india',
  openGraph: {
    title: 'About Bet4yaar - Leading Indian Online Casino & Sports Betting Platform',
    description: 'Learn about Bet4yaar, India\'s trusted online casino and sports betting platform. Licensed, secure, and committed to responsible gaming.',
    type: 'website',
    url: 'https://bet4yaar.com/about',
    images: [
      {
        url: 'https://bet4yaar.com/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Bet4yaar'
      }
    ]
  },
  alternates: {
    canonical: 'https://bet4yaar.com/about',
    languages: {
      'en-IN': '/en/about',
      'hi-IN': '/hi/about'
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/AboutPage">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6" itemProp="headline">About Bet4yaar</h1>

          <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-bg.svg"
              alt="Bet4yaar Office"
              fill
              className="object-cover"
              itemProp="image"
            />
          </div>

          <div className="prose max-w-none mb-12" itemScope itemType="https://schema.org/Organization">
            <h2>India's Premier Gaming Destination</h2>
            <p itemProp="description">
              Founded in 2023, Bet4yaar has quickly become one of India's most
              trusted online gaming platforms. We offer a comprehensive suite of
              casino games and sports betting options, all designed to provide
              our users with the best possible gaming experience.
            </p>

            <p itemProp="description">
              Our platform is built on three core principles: security,
              transparency, and responsible gaming. We hold all necessary
              licenses and operate under strict regulatory compliance to ensure
              a safe and fair environment for all our users.
            </p>
            <meta itemProp="foundingDate" content="2023" />
            <meta itemProp="name" content="Bet4yaar" />
            <meta itemProp="url" content="https://bet4yaar.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6" itemScope itemType="https://schema.org/Service">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2" itemProp="name">Licensed & Secure</h3>
              <p className="text-muted-foreground" itemProp="description">
                Operating under strict regulatory compliance with advanced
                security measures
              </p>
            </Card>

            <Card className="p-6" itemScope itemType="https://schema.org/Service">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2" itemProp="name">1M+ Users</h3>
              <p className="text-muted-foreground" itemProp="description">
                Trusted by over a million Indian players
              </p>
            </Card>

            <Card className="p-6" itemScope itemType="https://schema.org/Service">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2" itemProp="name">Award Winning</h3>
              <p className="text-muted-foreground" itemProp="description">
                Recognized for excellence in online gaming
              </p>
            </Card>
          </div>

          <div className="prose max-w-none" itemScope itemType="https://schema.org/Article">
            <h2>Our Commitment</h2>
            <h3 itemProp="name">Responsible Gaming</h3>
            <p itemProp="articleBody">
              We are committed to promoting responsible gaming practices. Our
              platform includes features like self-exclusion, deposit limits,
              and reality checks to help users maintain control over their
              gaming activities.
            </p>

            <h3 itemProp="name">Customer First</h3>
            <p itemProp="articleBody">
              Our 24/7 customer support team is always ready to assist you in
              multiple Indian languages. We believe in building long-term
              relationships with our users through transparent operations and
              excellent service.
            </p>

            <h3 itemProp="name">Innovation</h3>
            <p itemProp="articleBody">
              We continuously invest in technology to provide the best gaming
              experience. From our mobile-first platform to instant payments,
              we're always working to improve our services.
            </p>

            <h2>Legal Information</h2>
            <p itemProp="text">
              Bet4yaar is operated by [Company Name] under License No. [XXX],
              issued by [Authority]. We comply with all relevant gaming
              regulations and maintain strict standards for user privacy and
              data protection.
            </p>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bet4yaar",
              "url": "https://bet4yaar.com",
              "foundingDate": "2023",
              "description": "India's premier online gaming platform offering sports betting and casino games",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "100+"
              },
              "award": "Excellence in Online Gaming",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Gaming Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sports Betting",
                      "description": "Live sports betting with real-time odds"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Casino Games",
                      "description": "Wide variety of online casino games"
                    }
                  }
                ]
              }
            })
          }} />
        </div>
      </div>
    </main>
  );
}