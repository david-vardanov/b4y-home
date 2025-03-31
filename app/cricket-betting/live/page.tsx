import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Live Cricket Betting - Bet4yaar Sports',
  description: 'Bet on live cricket matches at Bet4yaar. Get real-time odds, expert analysis, and instant payouts for IPL, international matches, and more.',
  keywords: 'cricket betting, live cricket odds, ipl betting, india cricket betting, online cricket betting, bet4yaar cricket',
  openGraph: {
    title: 'Live Cricket Betting - Bet4yaar Sports',
    description: 'Bet on live cricket matches at Bet4yaar. Get real-time odds, expert analysis, and instant payouts for IPL, international matches, and more.',
    type: 'website',
    url: 'https://bet4yaar.com/cricket-betting/live',
    images: [
      {
        url: 'https://bet4yaar.com/images/cricket-betting-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Live Cricket Betting at Bet4yaar'
      }
    ]
  },
  alternates: {
    canonical: 'https://bet4yaar.com/cricket-betting/live',
    languages: {
      'en-IN': '/en/cricket-betting/live',
      'hi-IN': '/hi/cricket-betting/live'
    }
  },
};

export default function LiveCricketPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/SportsEvent">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6" itemProp="name">Live Cricket Betting</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-6" itemScope itemType="https://schema.org/Event">
              <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/cricket-placeholder.svg"
                  alt="Live Cricket Match"
                  fill
                  className="object-cover"
                  itemProp="image"
                  priority
                />
              </div>
              
              <h2 className="text-2xl font-semibold mb-4" itemProp="name">Live Matches</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Odds</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow itemScope itemType="https://schema.org/SportsEvent">
                    <TableCell>India vs Australia</TableCell>
                    <TableCell>Live</TableCell>
                    <TableCell>2.15</TableCell>
                    <TableCell>
                      <Button size="sm">Bet Now</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow itemScope itemType="https://schema.org/SportsEvent">
                    <TableCell>RCB vs CSK</TableCell>
                    <TableCell>19:30 IST</TableCell>
                    <TableCell>1.95</TableCell>
                    <TableCell>
                      <Button size="sm">Bet Now</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <Card className="p-6" itemScope itemType="https://schema.org/ItemList">
              <h2 className="text-2xl font-semibold mb-4" itemProp="name">Betting Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-2" />
                  <span>Real-time odds updates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-2" />
                  <span>Live match statistics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-2" />
                  <span>Expert analysis and tips</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-2" />
                  <span>Multiple betting markets</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-2" />
                  <span>Instant withdrawals</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="prose max-w-none" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="name">Cricket Betting Guide</h2>
            <p>
              Whether you're betting on IPL matches or international cricket, our
              comprehensive betting platform offers you the best odds and widest
              range of markets.
            </p>

            <h3>Popular Betting Markets</h3>
            <ul itemProp="text">
              <li>Match Winner</li>
              <li>Top Batsman</li>
              <li>Top Bowler</li>
              <li>Total Runs</li>
              <li>Method of Dismissal</li>
            </ul>

            <h3>Betting Tips</h3>
            <ul itemProp="text">
              <li>Study team form and player statistics</li>
              <li>Consider pitch and weather conditions</li>
              <li>Follow expert analysis</li>
              <li>Manage your bankroll responsibly</li>
              <li>Take advantage of live betting opportunities</li>
            </ul>
            <meta itemProp="datePublished" content="2024-03-20" />
            <meta itemProp="dateModified" content="2024-03-20" />
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Live Cricket Betting",
              "description": "Bet on live cricket matches at Bet4yaar. Get real-time odds, expert analysis, and instant payouts for IPL, international matches, and more.",
              "url": "https://bet4yaar.com/cricket-betting/live",
              "eventStatus": "https://schema.org/EventScheduled",
              "sport": {
                "@type": "SportingGoodsCategory",
                "name": "Cricket"
              },
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "10+",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Bet4yaar",
                "url": "https://bet4yaar.com"
              },
              "subEvents": [
                {
                  "@type": "SportsEvent",
                  "name": "India vs Australia",
                  "startDate": new Date().toISOString(),
                  "eventStatus": "https://schema.org/EventInProgress",
                  "competitor": [
                    {
                      "@type": "SportsTeam",
                      "name": "India",
                      "image": "/images/india-flag.svg"
                    },
                    {
                      "@type": "SportsTeam",
                      "name": "Australia"
                    }
                  ]
                },
                {
                  "@type": "SportsEvent",
                  "name": "RCB vs CSK",
                  "startDate": "2024-03-20T19:30:00+05:30",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "competitor": [
                    {
                      "@type": "SportsTeam",
                      "name": "Royal Challengers Bangalore"
                    },
                    {
                      "@type": "SportsTeam",
                      "name": "Chennai Super Kings"
                    }
                  ]
                }
              ],
              "guide": {
                "@type": "Article",
                "name": "Cricket Betting Guide",
                "articleBody": "Whether you're betting on IPL matches or international cricket, our comprehensive betting platform offers you the best odds and widest range of markets.",
                "datePublished": "2024-03-20",
                "dateModified": "2024-03-20",
                "publisher": {
                  "@type": "Organization",
                  "name": "Bet4yaar",
                  "url": "https://bet4yaar.com"
                }
              }
            })
          }} />

          </div>
        </div>
      </div>
    </main>
  );
}