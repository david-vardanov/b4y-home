import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Gift, Timer, Trophy } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promo Codes & Bonuses - Bet4yaar | Get ₹1000 Welcome Bonus',
  description: 'Exclusive Bet4yaar promo codes and bonuses. Get ₹1000 welcome bonus, daily rewards, and special promotions for Indian players.',
  openGraph: {
    title: 'Promo Codes & Bonuses - Bet4yaar | Get ₹1000 Welcome Bonus',
    description: 'Exclusive Bet4yaar promo codes and bonuses. Get ₹1000 welcome bonus, daily rewards, and special promotions for Indian players.',
    type: 'website',
  },
};

export default function PromoCodePage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Promo Codes & Bonuses</h1>

          <Card className="p-8 mb-12 bg-primary/5 border-2 border-primary">
            <div className="flex items-center mb-6">
              <Trophy className="w-12 h-12 text-primary mr-4" />
              <div>
                <h2 className="text-2xl font-bold">Welcome Bonus</h2>
                <p className="text-muted-foreground">New players only</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">₹1000</div>
              <p className="text-sm text-muted-foreground mb-4">
                Use code: WELCOME1000
              </p>
              <Button size="lg">Claim Bonus</Button>
            </div>
            <div className="text-sm text-muted-foreground">
              *Minimum deposit ₹100. Wagering requirements apply.
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <Gift className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Rewards</h3>
              <p className="text-muted-foreground mb-4">
                Log in daily to claim free bonuses and spins
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <div className="font-semibold">Today's Bonus:</div>
                <div className="text-2xl font-bold">₹100 Free</div>
              </div>
              <Button variant="outline" className="w-full">
                Claim Daily Bonus
              </Button>
            </Card>

            <Card className="p-6">
              <Timer className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Limited Time Offer</h3>
              <p className="text-muted-foreground mb-4">
                Special weekend cashback bonus
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <div className="font-semibold">Use Code:</div>
                <div className="text-2xl font-bold">WEEKEND50</div>
              </div>
              <Button variant="outline" className="w-full">
                Activate Bonus
              </Button>
            </Card>
          </div>

          <div className="prose max-w-none">
            <h2>How to Use Promo Codes</h2>
            <ol>
              <li>Create an account or log in</li>
              <li>Go to the deposit page</li>
              <li>Enter your promo code</li>
              <li>Make a qualifying deposit</li>
              <li>Bonus will be credited instantly</li>
            </ol>

            <h2>Terms & Conditions</h2>
            <ul>
              <li>Welcome bonus is for new players only</li>
              <li>Minimum deposit required: ₹100</li>
              <li>Wagering requirements: 10x bonus amount</li>
              <li>Maximum bonus: ₹1000</li>
              <li>Promo codes cannot be combined</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}