'use client';

import { Button } from '@/components/ui/button';
import { useGameStore } from './store';
import { Gift } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function ClaimedPrizes() {
  const { claimedPrizes, activatePrize } = useGameStore();
  const pendingCount = claimedPrizes.filter(prize => !prize.activated).length;

  const getPrizeIcon = (type: string) => {
    switch (type) {
      case 'bonus':
        return '💰';
      case 'spin':
        return '🎰';
      case 'balance':
        return '🎫';
      default:
        return '🎁';
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Gift className="w-4 h-4 mr-2" />
          Claimed Prizes
          {pendingCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
              {pendingCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Rewards</SheetTitle>
          <SheetDescription>
            Activate your claimed prizes to receive rewards
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          {claimedPrizes.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No prizes claimed yet
            </p>
          ) : (
            <div className="space-y-4">
              {claimedPrizes.map((prize, index) => (
                <div
                  key={`${prize.description}-${prize.claimedAt?.toISOString()}`}
                  className={`p-4 rounded-lg border ${
                    prize.activated ? 'bg-muted' : 'bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {getPrizeIcon(prize.reward.type)}
                      </span>
                      <div>
                        <p className="font-medium">{prize.description}</p>
                        <p className="text-sm text-muted-foreground">
                          Claimed {prize.claimedAt?.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {!prize.activated && (
                      <Button
                        size="sm"
                        onClick={() => activatePrize(index)}
                      >
                        {prize.reward.type === 'balance' ? 'Copy Code' : 'Activate'}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}