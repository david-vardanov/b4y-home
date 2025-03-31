import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Login to Bet4yaar - Online Casino & Sports Betting",
  description:
    "Log in to your Bet4yaar account to place bets, play casino games, and withdraw your winnings securely.",
  openGraph: {
    title: "Login to Bet4yaar - Online Casino & Sports Betting",
    description:
      "Log in to your Bet4yaar account to place bets, play casino games, and withdraw your winnings securely.",
    type: "website",
  },
};

export default function LoginPage() {
  return (
    <main className="min-h-screen py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Login</h1>
          <p className="text-muted-foreground text-center mb-8">
            Welcome back to Bet4yaar
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Dont have an account?{" "}
                <Link
                  href="/registration"
                  className="text-primary hover:underline"
                >
                  Register now
                </Link>
              </p>
            </div>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Secure Login</h3>
              <p className="text-sm text-muted-foreground">
                SSL encrypted connection
              </p>
            </div>

            <div className="text-center">
              <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Quick Access</h3>
              <p className="text-sm text-muted-foreground">
                OTP verification available
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>By logging in, you agree to our Terms & Conditions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
