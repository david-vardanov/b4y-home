'use client';

import { useGameStore } from './store';
import { Card } from '@/components/ui/card';

export function GameCards() {
  const { playerCards, dealerCards, cardStates } = useGameStore();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-center">Dealer's Cards</h2>
        <div className="flex justify-center gap-4">
          {dealerCards.map((card, index) => (
            <Card 
              key={`dealer-${index}`}
              className={`w-24 h-36 flex items-center justify-center text-2xl font-bold transition-transform duration-500 ${
                cardStates.dealer[index] ? 'rotate-0' : 'rotate-180 bg-primary text-primary-foreground'
              } ${(card.suit === '♥' || card.suit === '♦') && cardStates.dealer[index] ? 'text-red-600' : ''}`}
            >
              {cardStates.dealer[index] ? `${card.rank}${card.suit}` : '🎴'}
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-center">Your Cards</h2>
        <div className="flex justify-center gap-4">
          {playerCards.map((card, index) => (
            <Card 
              key={`player-${index}`}
              className={`w-24 h-36 flex items-center justify-center text-2xl font-bold transition-transform duration-500 ${
                cardStates.player[index] ? 'rotate-0' : 'rotate-180 bg-primary text-primary-foreground'
              } ${(card.suit === '♥' || card.suit === '♦') && cardStates.player[index] ? 'text-red-600' : ''}`}
            >
              {cardStates.player[index] ? `${card.rank}${card.suit}` : '🎴'}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}