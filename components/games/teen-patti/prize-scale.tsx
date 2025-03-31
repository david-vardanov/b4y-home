'use client';

import { Progress } from '@/components/ui/progress';
import { useGameStore } from './store';
import { Button } from '@/components/ui/button';

interface Prize {
  points: number;
  description: string;
  reward: {
    type: string;
    value: number;
  };
}

interface PrizeScaleProps {
  prizes: Prize[];
  onClaimPrize: () => void;
}

export function PrizeScale({ prizes, onClaimPrize }: PrizeScaleProps) {
  const { playerPoints } = useGameStore();

  // Find the next prize target
  const nextPrize = prizes.find(prize => prize.points > playerPoints) || prizes[prizes.length - 1];
  const previousPrize = [...prizes].reverse().find(prize => prize.points <= playerPoints);
  
  // Calculate progress percentage
  const startPoints = previousPrize ? previousPrize.points : 0;
  const progressRange = nextPrize.points - startPoints;
  const currentProgress = playerPoints - startPoints;
  const progressPercentage = (currentProgress / progressRange) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">
          {previousPrize ? previousPrize.description : 'Start Playing'}
        </div>
        <div className="text-sm font-medium">
          {nextPrize.description}
        </div>
      </div>
      
      <div className="relative">
        <Progress value={progressPercentage} className="h-2" />
        {previousPrize && (
          <Button
            size="sm"
            variant="outline"
            className="absolute -top-8 left-0 transform -translate-x-1/2"
            onClick={onClaimPrize}
          >
            Claim
          </Button>
        )}
      </div>

      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{startPoints} points</span>
        <span>{nextPrize.points} points</span>
      </div>
    </div>
  );
}