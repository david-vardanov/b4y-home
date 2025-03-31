'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];
  
  // Remove the locale from the pathname
  const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '');
  
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'hi' : 'en';
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-8 h-8 p-0 overflow-hidden rounded-full"
      onClick={toggleLanguage}
    >
      <Image
        src={`/images/${currentLocale === 'en' ? 'england' : 'india'}-flag.svg`}
        alt={currentLocale === 'en' ? 'English' : 'Hindi'}
        fill
        className="object-cover"
      />
    </Button>
  );
}