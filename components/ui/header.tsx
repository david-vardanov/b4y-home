'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const navigationItems = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/cricket-betting/live', label: 'Cricket Betting' },
    { href: '/slots/aviator', label: 'Aviator' },
    { href: '/lucky-jet', label: 'Lucky Jet' },
  ],
  secondary: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/payment', label: 'Payments' },
    { href: '/promo-code', label: 'Promo Codes' },
  ],
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-24">
        <Link href="/" className="font-bold text-xl">
          Bet4yaar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            {navigationItems.main.map((item) => (
              <li key={item.href}>
                <Button variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            ))}
            <li>
              <Button asChild>
                <Link href="/registration">Join Now</Link>
              </Button>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t">
          <div className="container py-4">
            <ul className="space-y-2">
              {[...navigationItems.main, ...navigationItems.secondary].map((item) => (
                <li key={item.href}>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
              <li>
                <Button className="w-full" asChild>
                  <Link href="/registration">Join Now</Link>
                </Button>
              </li>
              <li className="flex justify-center">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}