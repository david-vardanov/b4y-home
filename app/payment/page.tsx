import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IndianRupee, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Secure Payments - Bet4yaar | UPI, Net Banking & More',
  description: 'Make secure deposits and withdrawals at Bet4yaar using UPI, Net Banking, and more. Instant processing, 24/7 support, and zero fees.',
  openGraph: {
    title: 'Secure Payments - Bet4yaar | UPI, Net Banking & More',
    description: 'Make secure deposits and withdrawals at Bet4yaar using UPI, Net Banking, and more. Instant processing, 24/7 support, and zero fees.',
    type: 'website',
  },
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Payment Methods</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Deposit Methods</h2>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                    alt="UPI Payment"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">UPI</h3>
                    <p className="text-sm text-muted-foreground">Instant, Free</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1622012986653-da862f8e2666?q=80&w=2940"
                    alt="Net Banking"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Net Banking</h3>
                    <p className="text-sm text-muted-foreground">All Major Banks</p>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Deposit Now
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Withdrawal Methods</h2>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          <div className="prose max-w-none">
            <h2>Payment FAQ</h2>
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
          </div>
        </div>
      </div>
    </main>
  );
}