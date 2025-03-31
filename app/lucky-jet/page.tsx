import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lucky Jet Game - Bet4yaar Casino',
  description: 'Play Lucky Jet at Bet4yaar - India\'s favorite multiplier crash game. Experience thrilling gameplay with multipliers up to 200x.',
  keywords: 'lucky jet game, crash game, online casino india, bet4yaar lucky jet, multiplier game, online gambling',
  openGraph: {
    title: 'Lucky Jet Game - Bet4yaar Casino',
    description: 'Play Lucky Jet at Bet4yaar - India\'s favorite multiplier crash game. Experience thrilling gameplay with multipliers up to 200x.',
    type: 'website',
    url: 'https://bet4yaar.com/lucky-jet',
    images: [
      {
        url: 'https://bet4yaar.com/images/lucky-jet-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucky Jet Game at Bet4yaar'
      }
    ]
  },
  alternates: {
    canonical: 'https://bet4yaar.com/lucky-jet',
    languages: {
      'en-IN': '/en/lucky-jet',
      'hi-IN': '/hi/lucky-jet'
    }
  },
};

export default function LuckyJetPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/WebPage">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6" itemProp="headline">Lucky Jet Game</h1>
          
          <Card className="p-8 mb-12" itemScope itemType="https://schema.org/Game">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/game-placeholder.svg"
                alt="Jet X Game"
                fill
                className="object-cover"
                itemProp="image"
              />
            </div>
            
            <div className="prose max-w-none">
              <h2 itemProp="name">Experience Lucky Jet</h2>
              <p itemProp="description">
                Lucky Jet is an innovative crash game that combines strategy with
                luck. Watch as the multiplier soars higher, but remember to cash
                out before the jet disappears!
              </p>
              
              <h3>Game Features</h3>
              <ul itemProp="gameItem">
                <li>Multipliers up to 200x</li>
                <li>Multiple betting options</li>
                <li>Real-time game statistics</li>
                <li>Social betting features</li>
              </ul>
              
              <h3>How to Win at Lucky Jet</h3>
              <p>
                Master Lucky Jet with these proven strategies:
              </p>
              <ul itemProp="about">
                <li>Start with small bets to learn the game</li>
                <li>Use the auto-cashout feature</li>
                <li>Study the game patterns</li>
                <li>Manage your bankroll wisely</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full">
                Play Lucky Jet Now
              </Button>
            </div>
          </Card>

          <div className="prose max-w-none" itemScope itemType="https://schema.org/FAQPage">
            <h2>Lucky Jet FAQ</h2>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">Is Lucky Jet safe to play?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Yes, Lucky Jet uses certified random number generation and is
                  regularly audited for fairness.
                </p>
              </div>
            </div>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">What is the minimum bet?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  You can start playing Lucky Jet with bets as low as ₹10, making it
                  accessible for all players.
                </p>
              </div>
            </div>

            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">How do I withdraw my winnings?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Winnings can be withdrawn instantly through various payment methods
                  including UPI, bank transfer, and e-wallets.
                </p>
              </div>
            </div>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "Lucky Jet",
              "description": "Lucky Jet is an innovative crash game that combines strategy with luck. Watch as the multiplier soars higher, but remember to cash out before the jet disappears!",
              "genre": "Casino Game",
              "gamePlatform": ["Web Browser", "Mobile Web"],
              "applicationCategory": "Game",
              "operatingSystem": "All",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "12000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "offers": {
                "@type": "Offer",
                "category": "Online Game",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
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