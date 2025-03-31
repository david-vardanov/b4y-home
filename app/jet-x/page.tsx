import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Jet X Game - Bet4yaar Casino | Play Online with Real Money',
  description: 'Experience the thrill of Jet X at Bet4yaar. Win big with multipliers up to 500x. Safe, secure, and instant payouts in INR.',
  openGraph: {
    title: 'Jet X Game - Bet4yaar Casino | Play Online with Real Money',
    description: 'Experience the thrill of Jet X at Bet4yaar. Win big with multipliers up to 500x. Safe, secure, and instant payouts in INR.',
    type: 'website',
  },
};

export default function JetXPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Jet X - The Ultimate Multiplier Game</h1>
          
          <Card className="p-8 mb-12">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2940"
                alt="Jet X Game"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              <h2>Play Jet X Online</h2>
              <p>
                Jet X takes crash gaming to new heights with its innovative gameplay
                and massive multipliers. Watch your potential winnings soar as the
                jet climbs higher, but cash out before it's too late!
              </p>
              
              <h3>Exclusive Features</h3>
              <ul>
                <li>Multipliers up to 500x</li>
                <li>Dual betting system</li>
                <li>Live player statistics</li>
                <li>Tournament mode</li>
                <li>Practice mode available</li>
              </ul>
              
              <h3>Winning Strategies</h3>
              <p>
                Maximize your chances of winning with these expert tips:
              </p>
              <ul>
                <li>Use the dual betting feature strategically</li>
                <li>Set automatic cash-out levels</li>
                <li>Track multiplier patterns</li>
                <li>Join tournaments for bonus prizes</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full">
                Start Playing Jet X
              </Button>
            </div>
          </Card>

          <div className="prose max-w-none">
            <h2>Frequently Asked Questions</h2>
            <h3>What makes Jet X different?</h3>
            <p>
              Jet X features a unique dual betting system and higher multipliers
              than most crash games, plus exclusive tournaments with prize pools.
            </p>

            <h3>Is Jet X available on mobile?</h3>
            <p>
              Yes, Jet X is fully optimized for all mobile devices, offering the
              same smooth experience as desktop.
            </p>

            <h3>How do I start playing?</h3>
            <p>
              Simply register an account, make a deposit using any of our secure
              payment methods, and you can start playing Jet X instantly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}