import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Star, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2940"
          alt="Bet4yaar Casino"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bet4yaar – Official Website for Online Sports Betting and Online Casino
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Use promo code WELCOME1000 and get up to ₹1,000 welcome bonus!
            </p>
            <Button size="lg" asChild>
              <Link href="/registration">
                Join Bet4yaar <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Cricket Section */}
      <section className="bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Live Cricket Betting</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 p-6">
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
                    <TableCell>Mumbai Indians vs CSK</TableCell>
                    <TableCell>Live</TableCell>
                    <TableCell>2.15</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Bet Now</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>RCB vs LSG</TableCell>
                    <TableCell>19:30 IST</TableCell>
                    <TableCell>1.95</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Bet Now</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>India vs England</TableCell>
                    <TableCell>Tomorrow</TableCell>
                    <TableCell>1.85</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Bet Now</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/cricket-betting/live">Live Matches</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/cricket-betting/upcoming">Upcoming Matches</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/cricket-betting/ipl">IPL 2025</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Bet4yaar</h2>
            <div className="prose">
              <p className="text-lg">
                Founded in 2023, Bet4yaar has quickly become one of India's most trusted online
                gaming platforms. We offer comprehensive sports betting and casino games, with a
                special focus on cricket and other popular Indian sports.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">1M+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </Card>
                <Card className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </Card>
                <Card className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">₹1000</div>
                  <div className="text-sm text-muted-foreground">Welcome Bonus</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1592167613833-0261b75b6aef?q=80&w=2940"
                  alt="Aviator Game"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aviator</h3>
              <p className="text-muted-foreground mb-4">
                Experience the thrill of our most popular crash game
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/slots/aviator">Play Now</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2940"
                  alt="Lucky Jet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lucky Jet</h3>
              <p className="text-muted-foreground mb-4">
                Take off with multipliers in this exciting game
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/lucky-jet">Play Now</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?q=80&w=2940"
                  alt="Cricket Betting"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cricket Betting</h3>
              <p className="text-muted-foreground mb-4">
                Live cricket betting with real-time odds
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/cricket-betting/live">Bet Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer support in multiple Indian languages
              </p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple secure payment options including UPI and Net Banking
              </p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Regulated</h3>
              <p className="text-muted-foreground">
                Operating under strict regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
