import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Star, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { createTranslator } from 'next-intl';
import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = await createTranslator({ locale, messages, namespace: 'home' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: t('metadata.keywords'),
    alternates: {
      canonical: 'https://bet4yaar.com',
      languages: {
        'en-IN': '/en',
        'hi-IN': '/hi'
      }
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: 'https://bet4yaar.com',
      siteName: 'Bet4yaar',
      locale: locale === 'en' ? 'en_IN' : 'hi_IN',
      type: 'website',
      images: [
        {
          url: 'https://bet4yaar.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Bet4yaar - Premier Indian Online Casino'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metadata.title'),
      description: t('metadata.description'),
      images: ['https://bet4yaar.com/images/og-image.jpg']
    }
  };
}

export default async function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = await createTranslator({ locale, messages, namespace: 'home' });

  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden -mt-24" itemScope itemType="https://schema.org/WPHeader">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <Image
          src="/images/hero-bg.svg"
          alt="Bet4yaar Casino"
          fill
          className="object-cover"
          itemProp="image"
          priority
        />
        <div className="relative z-20 container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" itemProp="headline">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8" itemProp="description">
              {t('hero.subtitle')}
            </p>
            <Button size="lg" asChild>
              <Link href="/registration">
                {t('hero.joinButton')} <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Cricket Section */}
      <section className="bg-background" itemScope itemType="https://schema.org/SportsEvent">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8" itemProp="name">{t('cricket.title')}</h2>
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
                      <Button size="sm" variant="outline">{t('cricket.betNow')}</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>RCB vs LSG</TableCell>
                    <TableCell>19:30 IST</TableCell>
                    <TableCell>1.95</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">{t('cricket.betNow')}</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>India vs England</TableCell>
                    <TableCell>Tomorrow</TableCell>
                    <TableCell>1.85</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">{t('cricket.betNow')}</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('cricket.quickLinks')}</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/cricket-betting/live">{t('cricket.liveMatches')}</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/cricket-betting/upcoming">{t('cricket.upcomingMatches')}</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/cricket-betting/ipl">{t('cricket.ipl')}</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50" itemScope itemType="https://schema.org/Organization">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" itemProp="name">{t('about.title')}</h2>
            <div className="prose">
              <p className="text-lg" itemProp="description">{t('about.description')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">1M+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.users')}</div>
                </Card>
                <Card className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">24/7</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.support')}</div>
                </Card>
                <Card className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">₹1000</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.bonus')}</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="bg-background" itemScope itemType="https://schema.org/ItemList">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center" itemProp="name">{t('games.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6" itemScope itemType="https://schema.org/Game" itemProp="itemListElement">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                  alt="Aviator Game"
                  fill
                  className="object-cover"
                  itemProp="image"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2" itemProp="name">{t('games.aviator.title')}</h3>
              <p className="text-muted-foreground mb-4" itemProp="description">
                {t('games.aviator.description')}
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/slots/aviator">{t('games.aviator.playNow')}</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2940"
                  alt="Lucky Jet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('games.luckyJet.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('games.luckyJet.description')}
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/lucky-jet">{t('games.luckyJet.playNow')}</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2940"
                  alt="Cricket Betting"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('games.cricket.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('games.cricket.description')}
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/cricket-betting/live">{t('games.cricket.playNow')}</Link>
              </Button>
            </Card>
          </div>
          
          <Card className="p-6 mt-8">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                alt="Teen Patti"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('games.teenPatti.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('games.teenPatti.description')}
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/games/teen-patti">{t('games.teenPatti.playNow')}</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30" itemScope itemType="https://schema.org/ItemList">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div itemScope itemType="https://schema.org/Service" itemProp="itemListElement">
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2" itemProp="name">{t('features.support.title')}</h3>
              <p className="text-muted-foreground" itemProp="description">
                {t('features.support.description')}
              </p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('features.payments.title')}</h3>
              <p className="text-muted-foreground">
                {t('features.payments.description')}
              </p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('features.licensed.title')}</h3>
              <p className="text-muted-foreground">
                {t('features.licensed.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}