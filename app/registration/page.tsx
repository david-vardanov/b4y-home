import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Smartphone, Wallet } from 'lucide-react';

export const metadata = {
  title: 'Register at Bet4yaar - Get ₹1000 Welcome Bonus | Indian Casino',
  description: 'Sign up at Bet4yaar and claim your ₹1000 welcome bonus. Safe & secure registration, instant account verification, and 24/7 support.',
  openGraph: {
    title: 'Register at Bet4yaar - Get ₹1000 Welcome Bonus | Indian Casino',
    description: 'Sign up at Bet4yaar and claim your ₹1000 welcome bonus. Safe & secure registration, instant account verification, and 24/7 support.',
    type: 'website',
  },
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Create Account</h1>
          <p className="text-muted-foreground text-center mb-8">
            Join Bet4yaar and claim your ₹1000 welcome bonus
          </p>

          <Card className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 " />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="promo">Promo Code (Optional)</Label>
                <Input id="promo" placeholder="Enter promo code" />
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Secure & Licensed</h3>
              <p className="text-sm text-muted-foreground">
                SSL encrypted, fully licensed
              </p>
            </div>
            
            <div className="text-center">
              <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Quick Verification</h3>
              <p className="text-sm text-muted-foreground">
                Instant OTP verification
              </p>
            </div>
            
            <div className="text-center">
              <Wallet className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">₹1000 Bonus</h3>
              <p className="text-sm text-muted-foreground">
                Instant welcome bonus
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>By creating an account, you agree to our Terms & Conditions and confirm you are at least 18 years old.</p>
          </div>
        </div>
      </div>
    </main>
  );
}