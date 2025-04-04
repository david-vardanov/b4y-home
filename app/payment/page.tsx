import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IndianRupee, Shield, Zap } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Secure Payments - Bet4yaar | UPI, Net Banking & More',
  description: 'Make secure deposits and withdrawals at Bet4yaar using UPI, Net Banking, and more. Instant processing, 24/7 support, and zero fees.',
  keywords: 'bet4yaar payments, upi betting, net banking casino, online betting payment, secure gambling payments india',
  openGraph: {
    title: 'Secure Payments - Bet4yaar | UPI, Net Banking & More',
    description: 'Make secure deposits and withdrawals at Bet4yaar using UPI, Net Banking, and more. Instant processing, 24/7 support, and zero fees.',
    type: 'website',
    url: 'https://bet4yaar.com/payment',
    images: [
      {
        url: 'https://bet4yaar.com/images/payment-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Secure Payments at Bet4yaar'
      }
    ]
  },
  alternates: {
    canonical: 'https://bet4yaar.com/payment',
    languages: {
      'en-IN': '/en/payment',
      'hi-IN': '/hi/payment'
    }
  },
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen py-20" itemScope itemType="https://schema.org/WebPage">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6" itemProp="name">Payment Methods</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" itemScope itemType="https://schema.org/PaymentMethod">
            <Card className="p-6" itemScope itemType="https://schema.org/PaymentMethod">
              <h2 className="text-2xl font-semibold mb-6" itemProp="name">Deposit Methods</h2>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-muted rounded-lg" itemScope itemType="https://schema.org/PaymentMethod">
                  <Image
                    src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                    alt="UPI Payment"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold" itemProp="name">UPI</h3>
                    <p className="text-sm text-muted-foreground" itemProp="description">Instant, Free</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-muted rounded-lg" itemScope itemType="https://schema.org/PaymentMethod">
                  <Image
                    src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                    alt="Net Banking"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold" itemProp="name">Net Banking</h3>
                    <p className="text-sm text-muted-foreground" itemProp="description">All Major Banks</p>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Deposit Now
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6" itemProp="name">Withdrawal Methods</h2>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                    alt="Bank Transfer"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Bank Transfer</h3>
                    <p className="text-sm text-muted-foreground">1-24 hours</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                    alt="UPI Withdrawal"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">UPI</h3>
                    <p className="text-sm text-muted-foreground">Instant</p>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Withdraw Now
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" itemScope itemType="https://schema.org/ItemList">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">100% Secure</h3>
              <p className="text-sm text-muted-foreground">
                SSL encrypted transactions
              </p>
            </div>
            
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Instant Processing</h3>
              <p className="text-sm text-muted-foreground">
                No waiting time for deposits
              </p>
            </div>
            
            <div className="text-center">
              <IndianRupee className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Zero Fees</h3>
              <p className="text-sm text-muted-foreground">
                No transaction charges
              </p>
            </div>
          </div>

          <div className="prose max-w-none" itemScope itemType="https://schema.org/FAQPage">
            <h2 itemProp="name">Payment FAQ</h2>
            <h3>What is the minimum deposit?</h3>
            <p>The minimum deposit amount is ₹100.</p>

            <h3>How long do withdrawals take?</h3>
            <p>
              UPI withdrawals are processed instantly. Bank transfers may take up
              to 24 hours depending on your bank.
            </p>

            <h3>Are there any fees?</h3>
            <p>
              No, Bet4yaar does not charge any fees for deposits or withdrawals.
              However, your bank might have their own charges.
            </p>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the minimum deposit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The minimum deposit amount is ₹100."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long do withdrawals take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "UPI withdrawals are processed instantly. Bank transfers may take up to 24 hours depending on your bank."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are there any fees?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, Bet4yaar does not charge any fees for deposits or withdrawals. However, your bank might have their own charges."
                    }
                  }
                ]
              })
            }} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Payment Methods",
                "description": "Make secure deposits and withdrawals at Bet4yaar using UPI, Net Banking, and more. Instant processing, 24/7 support, and zero fees.",
                "url": "https://bet4yaar.com/payment",
                "provider": {
                  "@type": "Organization",
                  "name": "Bet4yaar",
                  "url": "https://bet4yaar.com"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "offerCount": "4",
                  "priceCurrency": "INR",
                  "acceptedPaymentMethod": [
                    {
                      "@type": "PaymentMethod",
                      "name": "UPI",
                      "description": "Instant, Free"
                    },
                    {
                      "@type": "PaymentMethod",
                      "name": "Net Banking",
                      "description": "All Major Banks"
                    }
                  ]
                }
              })
            }} />
          </div>
        </div>
      </div>
    </main>
  );
}