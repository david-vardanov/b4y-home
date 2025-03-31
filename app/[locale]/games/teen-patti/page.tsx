import { Metadata } from 'next';
import { TeenPatti } from '@/components/games/teen-patti/teen-patti';

export const metadata: Metadata = {
  title: 'Teen Patti - Popular Indian Card Game | Play Online at Bet4yaar',
  description: 'Play Teen Patti online at Bet4yaar. Experience the authentic Indian card game with real-time multipliers, bonuses, and rewards. Safe and secure gameplay.',
  keywords: 'teen patti online, indian card game, bet4yaar teen patti, online teen patti, real money teen patti',
  openGraph: {
    title: 'Teen Patti - Popular Indian Card Game | Play Online at Bet4yaar',
    description: 'Play Teen Patti online at Bet4yaar. Experience the authentic Indian card game with real-time multipliers, bonuses, and rewards. Safe and secure gameplay.',
    type: 'game',
    url: 'https://bet4yaar.com/games/teen-patti',
    images: [
      {
        url: 'https://bet4yaar.com/images/teen-patti-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teen Patti Game at Bet4yaar'
      }
    ]
  },
  alternates: {
    canonical: 'https://bet4yaar.com/games/teen-patti',
    languages: {
      'en-IN': '/en/games/teen-patti',
      'hi-IN': '/hi/games/teen-patti'
    }
  }
};

export default function TeenPattiPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/VideoGame">
      <meta itemProp="name" content="Teen Patti" />
      <meta itemProp="description" content="Play Teen Patti online at Bet4yaar. Experience the authentic Indian card game with real-time multipliers, bonuses, and rewards." />
      <meta itemProp="image" content="https://bet4yaar.com/images/teen-patti-og.jpg" />
      <meta itemProp="applicationCategory" content="Game" />
      <meta itemProp="gamePlatform" content="Web Browser" />
      <meta itemProp="operatingSystem" content="Any" />
      <meta itemProp="genre" content="Card Game" />
      <meta itemProp="inLanguage" content="en,hi" />
      
      <div itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Bet4yaar" />
        <meta itemProp="url" content="https://bet4yaar.com" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto">
          <TeenPatti />
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "name": "Teen Patti",
          "description": "Play Teen Patti online at Bet4yaar. Experience the authentic Indian card game with real-time multipliers, bonuses, and rewards.",
          "image": "https://bet4yaar.com/images/teen-patti-og.jpg",
          "url": "https://bet4yaar.com/games/teen-patti",
          "applicationCategory": "Game",
          "gamePlatform": "Web Browser",
          "operatingSystem": "Any",
          "genre": "Card Game",
          "inLanguage": ["en", "hi"],
          "publisher": {
            "@type": "Organization",
            "name": "Bet4yaar",
            "url": "https://bet4yaar.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "15000",
            "bestRating": "5",
            "worstRating": "1"
          }
        })
      }} />
    </main>
  );
}