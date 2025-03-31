import { Button } from '@/components/ui/button';
import Link from 'next/link';

const footerLinks = {
  'Quick Links': [
    { href: '/cricket-betting/live', label: 'Cricket Betting' },
    { href: '/slots/aviator', label: 'Aviator Game' },
    { href: '/lucky-jet', label: 'Lucky Jet' },
    { href: '/jet-x', label: 'Jet X' },
  ],
  'Support': [
    { href: '/contact', label: 'Contact Us' },
    { href: '/about', label: 'About Us' },
    { href: '/payment', label: 'Payments' },
    { href: '/promo-code', label: 'Promo Code' },
  ],
  'Legal': [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/responsible-gaming', label: 'Responsible Gaming' },
    { href: '/anti-fraud', label: 'Anti-fraud' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">Bet4yaar</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              India's premier online casino and sports betting platform.
            </p>
            <div className="space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/registration">Sign Up</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/registration">Login</Link>
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Bet4yaar. All rights reserved.</p>
            <p className="mt-2">
              This website is operated by [Company Name] under License No. [XXX]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}