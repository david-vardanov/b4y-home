'use client';

import { TeenPatti } from '@/components/games/teen-patti/teen-patti';
import { Card } from '@/components/ui/card';

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
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <TeenPatti />
        </div>
      </div>
    </main>
  );
}