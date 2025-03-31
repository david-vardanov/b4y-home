import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { createTranslator } from 'next-intl';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bet4yaar - Premier Indian Online Casino & Sports Betting Platform',
  description: 'Experience the thrill of online betting at Bet4yaar. Play Aviator, Lucky Jet, and more casino games. Safe, secure, and trusted Indian betting platform.',
  keywords: 'bet4yaar, indian casino, online betting, aviator game, cricket betting, lucky jet, sports betting india',
  openGraph: {
    title: 'Bet4yaar - Premier Indian Online Casino & Sports Betting Platform',
    description: 'Experience the thrill of online betting at Bet4yaar. Play Aviator, Lucky Jet, and more casino games. Safe, secure, and trusted Indian betting platform.',
    url: 'https://bet4yaar.com',
    siteName: 'Bet4yaar',
    locale: 'en_IN',
    type: 'website',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hi' }];
}

async function getMessages(locale: string) {
  try {
    if (!['en', 'hi'].includes(locale)) {
      console.warn(`Invalid locale requested: ${locale}, falling back to English`);
      return (await import(`../../messages/en.json`)).default;
    }

    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    
    // If English messages fail to load, we have a serious problem
    if (locale === 'en') {
      throw new Error('Failed to load default English messages');
    }
    
    // For non-English locales, fall back to English
    console.warn(`Falling back to English locale from: ${locale}`);
    try {
      return (await import(`../../messages/en.json`)).default;
    } catch (fallbackError) {
      console.error('Critical: Failed to load fallback English messages', fallbackError);
      throw new Error('Failed to load any messages');
    }
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  let actualLocale = locale;
  
  try {
    messages = await getMessages(locale);
  } catch (error) {
    return notFound();
  }
  
  const t = await createTranslator({ locale: actualLocale, messages });

  return (
    <html lang={actualLocale}>
      <head>
        <link rel="canonical" href="https://bet4yaar.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={actualLocale === 'en' ? 'en_IN' : 'hi_IN'} />
        <meta property="og:site_name" content="Bet4yaar" />
      </head>
      <body className={inter.className} itemScope itemType="https://schema.org/WebPage">
        <NextIntlClientProvider locale={actualLocale} messages={messages}>
        <Header />
        <div itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Bet4yaar" />
          <meta itemProp="url" content="https://bet4yaar.com" />
          <meta itemProp="logo" content="https://bet4yaar.com/logo.png" />
          <meta itemProp="description" content="Premier Indian Online Casino & Sports Betting Platform" />
        </div>
        <main itemScope itemType="https://schema.org/WebPageElement">
          {children}
        </main>
        <Footer />
        <Toaster />
        </NextIntlClientProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bet4yaar",
            "url": "https://bet4yaar.com",
            "logo": "https://bet4yaar.com/logo.png",
            "sameAs": [
              "https://facebook.com/bet4yaar",
              "https://twitter.com/bet4yaar",
              "https://instagram.com/bet4yaar"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            }
          })
        }} />
      </body>
    </html>
  );
}