import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';

export const metadata = {
  title: 'Live Cricket Betting - Bet4yaar Sports',
  description: 'Bet on live cricket matches at Bet4yaar. Get real-time odds, expert analysis, and instant payouts for IPL, international matches, and more.',
  openGraph: {
    title: 'Live Cricket Betting - Bet4yaar Sports',
    description: 'Bet on live cricket matches at Bet4yaar. Get real-time odds, expert analysis, and instant payouts for IPL, international matches, and more.',
    type: 'website',
  },
};

export default function LiveCricketPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Live Cricket Betting</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 p-6">
              <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/cricket-placeholder.svg"
                  alt="Live Cricket Match"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Live Matches</h2>
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
                  <TableRow>
                    <TableCell>India vs Australia</TableCell>
                    <TableCell>Live</TableCell>
                    <TableCell>2.15</TableCell>
                    <TableCell>
                      <Button size="sm">Bet Now</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
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

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Betting Features</h2>
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

          <div className="prose max-w-none">
            <h2>Cricket Betting Guide</h2>
            <p>
              Whether you're betting on IPL matches or international cricket, our
              comprehensive betting platform offers you the best odds and widest
              range of markets.
            </p>

            <h3>Popular Betting Markets</h3>
            <ul>
              <li>Match Winner</li>
              <li>Top Batsman</li>
              <li>Top Bowler</li>
              <li>Total Runs</li>
              <li>Method of Dismissal</li>
            </ul>

            <h3>Betting Tips</h3>
            <ul>
              <li>Study team form and player statistics</li>
              <li>Consider pitch and weather conditions</li>
              <li>Follow expert analysis</li>
              <li>Manage your bankroll responsibly</li>
              <li>Take advantage of live betting opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}