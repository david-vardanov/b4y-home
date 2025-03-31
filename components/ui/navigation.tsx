import Link from 'next/link';
import { Button } from './button';

export function Navigation() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Bet4yaar
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cricket-betting/live" className="text-foreground/80 hover:text-foreground">
              Cricket Betting
            </Link>
            <Link href="/slots/aviator" className="text-foreground/80 hover:text-foreground">
              Aviator
            </Link>
            <Link href="/lucky-jet" className="text-foreground/80 hover:text-foreground">
              Lucky Jet
            </Link>
            <Link href="/jet-x" className="text-foreground/80 hover:text-foreground">
              Jet X
            </Link>
            <Link href="/promo-code" className="text-foreground/80 hover:text-foreground">
              Promo Code
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/registration">Register</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}