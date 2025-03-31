import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviator Game - Bet4yaar Casino',
  description: 'Play the popular Aviator crash game at Bet4yaar. Experience thrilling multipliers and real-time betting action.',
  keywords: 'aviator game, crash game, online casino game, bet4yaar aviator, multiplier game india',
  openGraph: {
    title: 'Aviator Game - Bet4yaar Casino',
    description: 'Play the popular Aviator crash game at Bet4yaar. Experience thrilling multipliers and real-time betting action.',
    type: 'website',
    url: 'https://bet4yaar.com/slots/aviator',
    images: [
      {
        url: 'https://bet4yaar.com/images/aviator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Aviator Game at Bet4yaar'
      }
    ]
  },
  alternates: {
    canonical: 'https://bet4yaar.com/slots/aviator',
    languages: {
      'en-IN': '/en/slots/aviator',
      'hi-IN': '/hi/slots/aviator'
    }
  }
};

export default function AviatorPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/WebPage">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6" itemProp="headline">Aviator Game</h1>
          
          <Card className="p-8 mb-12" itemScope itemType="https://schema.org/Game">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/game-placeholder.svg"
                alt="Aviator Game"
                fill
                className="object-cover"
                itemProp="image"
              />
            </div>
            
            <div className="prose max-w-none">
              <h2 itemProp="name">How to Play Aviator</h2>
              <p itemProp="description">
                Aviator is an exciting crash game where players bet on a multiplier
                before the plane takes off. The multiplier increases as the plane
                flies higher, but you must cash out before it crashes to win!
              </p>
              
              <h3>Game Features</h3>
              <ul itemProp="gameItem">
                <li>Real-time multiplier updates</li>
                <li>Auto-cashout option</li>
                <li>Live chat with other players</li>
                <li>Detailed betting history</li>
              </ul>
              
              <h3>Betting Strategies</h3>
              <p>
                Success in Aviator requires a combination of timing, strategy, and
                luck. Here are some popular strategies:
              </p>
              <ul itemProp="about">
                <li>Conservative: Cash out at lower multipliers (1.5x - 2x)</li>
                <li>Balanced: Aim for medium multipliers (2x - 5x)</li>
                <li>Aggressive: Wait for higher multipliers (5x+)</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full">
                Play Aviator Now
              </Button>
            </div>
          </Card>

          <div className="prose max-w-none" itemScope itemType="https://schema.org/FAQPage">
            <h2>Frequently Asked Questions</h2>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">Is Aviator fair?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Yes, Aviator uses a provably fair system that ensures complete
                  randomness and transparency in every game round.
                </p>
              </div>
            </div>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">What is the maximum multiplier?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  The theoretical maximum multiplier is 100x, but the plane can crash
                  at any time, making each round unique and exciting.
                </p>
              </div>
            </div>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">Can I play Aviator on mobile?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Yes, Aviator is fully optimized for mobile devices and provides the
                  same smooth experience as the desktop version.
                </p>
              </div>
            </div>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "Aviator",
              "description": "Aviator is an exciting crash game where players bet on a multiplier before the plane takes off. The multiplier increases as the plane flies higher, but you must cash out before it crashes to win!",
              "genre": "Casino Game",
              "gamePlatform": ["Web Browser", "Mobile Web"],
              "applicationCategory": "Game",
              "operatingSystem": "All",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "15000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "offers": {
                "@type": "Offer",
                "category": "Online Game",
                "price": "0",
                "priceCurrency": "INR"
              },
              "provider": {
                "@type": "Organization",
                "name": "Bet4yaar",
                "url": "https://bet4yaar.com"
              }
            })
          }} />
        </div>
      </div>
    </main>
  );
}