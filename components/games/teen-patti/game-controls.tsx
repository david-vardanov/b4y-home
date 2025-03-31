'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGameStore } from './store';

interface GameControlsProps {
  onStartGame: () => void;
  onPlay: () => void;
  onFold: () => void;
}

export function GameControls({ onStartGame, onPlay, onFold }: GameControlsProps) {
  const { currentBet, playerBalance, hasDealtCards, gameOver, setCurrentBet } = useGameStore();

  const isValidBet = currentBet >= 10 && currentBet <= playerBalance;

  if (gameOver) {
    return (
      <div className="flex justify-center gap-4">
        <Button 
          size="lg"
          onClick={onStartGame}
          disabled={!isValidBet}
        >
          Play Again
        </Button>
      </div>
    );
  }

  if (!hasDealtCards) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Bet Amount:</span>
          <Input
            type="number"
            min={10}
            max={playerBalance}
            value={currentBet}
            onChange={(e) => setCurrentBet(Number(e.target.value))}
            className="w-24"
          />
        </div>
        <Button 
          size="lg"
          onClick={onStartGame}
          disabled={!isValidBet}
        >
          Place Bet & Deal
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4">
      <Button 
        size="lg" 
        onClick={onPlay}
        variant="default"
      >
        Play
      </Button>
      <Button 
        size="lg" 
        onClick={onFold}
        variant="destructive"
      >
        Fold
      </Button>
    </div>
  );
}