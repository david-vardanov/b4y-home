'use client';

import { useEffect, useState } from 'react';
import { useGameStore } from './store';
import { GameCards } from './game-cards';
import { GameControls } from './game-controls';
import { PrizeScale } from './prize-scale';
import { ClaimedPrizes } from './claimed-prizes';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';

const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const prizes = [
  { points: 100, description: '150% Deposit Bonus', reward: { type: 'bonus', value: 1.5 } },
  { points: 200, description: '3 Free Spins', reward: { type: 'spin', value: 3 } },
  { points: 300, description: '300% Deposit Bonus', reward: { type: 'bonus', value: 3 } },
  { points: 400, description: '₹100 Instant Cash', reward: { type: 'balance', value: 100 } },
  { points: 500, description: '500% Deposit Bonus', reward: { type: 'bonus', value: 5 } }
];

export function TeenPatti() {
  const { toast } = useToast();
  const game = useGameStore();
  const [locale, setLocale] = useState('en');

  function createDeck() {
    const deck = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push({ suit, rank });
      }
    }
    return deck;
  }

  function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function dealCards() {
    const deck = shuffle(createDeck());
    game.setPlayerCards(deck.slice(0, 3));
    game.setDealerCards(deck.slice(3, 6));
  }

  function getHandRank(cards: any[]) {
    const sortedCards = [...cards].sort((a, b) => ranks.indexOf(b.rank) - ranks.indexOf(a.rank));

    // Check for trail (three of a kind)
    if (sortedCards[0].rank === sortedCards[1].rank && sortedCards[1].rank === sortedCards[2].rank) {
      return { type: 'Trail', value: ranks.indexOf(sortedCards[0].rank) };
    }

    // Check for pure sequence
    const isSequence = ranks.indexOf(sortedCards[0].rank) === ranks.indexOf(sortedCards[1].rank) + 1 &&
                      ranks.indexOf(sortedCards[1].rank) === ranks.indexOf(sortedCards[2].rank) + 1;
    const isPure = sortedCards[0].suit === sortedCards[1].suit && sortedCards[1].suit === sortedCards[2].suit;

    if (isSequence && isPure) {
      return { type: 'Pure Sequence', value: ranks.indexOf(sortedCards[0].rank) };
    }

    // Check for sequence
    if (isSequence) {
      return { type: 'Sequence', value: ranks.indexOf(sortedCards[0].rank) };
    }

    // Check for color
    if (isPure) {
      return { type: 'Color', value: ranks.indexOf(sortedCards[0].rank) };
    }

    // Check for pair
    if (sortedCards[0].rank === sortedCards[1].rank || sortedCards[1].rank === sortedCards[2].rank) {
      return { type: 'Pair', value: ranks.indexOf(sortedCards[1].rank) };
    }

    // High card
    return { type: 'High Card', value: ranks.indexOf(sortedCards[0].rank) };
  }

  function compareHands(playerHand: any, dealerHand: any) {
    const handTypes = ['High Card', 'Pair', 'Color', 'Sequence', 'Pure Sequence', 'Trail'];
    
    if (handTypes.indexOf(playerHand.type) > handTypes.indexOf(dealerHand.type)) {
      return 'player';
    } else if (handTypes.indexOf(playerHand.type) < handTypes.indexOf(dealerHand.type)) {
      return 'dealer';
    } else {
      return playerHand.value > dealerHand.value ? 'player' : 'dealer';
    }
  }

  async function startGame() {
    if (game.isTransitioning) return;
    
    game.setIsTransitioning(true);
    game.setCardStates({
      player: [false, false, false],
      dealer: [false, false, false]
    });
    
    // Take ante from both player and dealer
    game.setPlayerBalance(game.playerBalance - game.ante);
    game.setPotAmount(game.ante * 2);
    
    dealCards();
    game.setHasDealtCards(true);
    game.setGameStatus(`Pot: ₹${game.potAmount} | Current Bet: ₹${game.currentBet}`);
    game.setGameOver(false);
    
    // Flip player cards with a slight delay
    setTimeout(() => {
      game.setCardStates({
        player: [true, true, true],
        dealer: [false, false, false]
      });
      game.setIsTransitioning(false);
    }, 300);
  }

  async function flipCards() {
    const newStates = { ...game.cardStates };
    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      newStates.dealer[i] = true;
      game.setCardStates(newStates);
    }
  }

  function play() {
    if (game.isTransitioning) return;
    game.setGameOver(true);
    game.setIsTransitioning(true);
    
    // Add current bet to pot
    game.setPlayerBalance(game.playerBalance - game.currentBet);
    game.setPotAmount(game.potAmount + game.currentBet * 2);
    
    flipCards().then(() => {
      game.setIsTransitioning(false);
    });

    const playerHand = getHandRank(game.playerCards);
    const dealerHand = getHandRank(game.dealerCards);
    const winner = compareHands(playerHand, dealerHand);
    
    if (winner === 'player') {
      game.setPlayerBalance(game.playerBalance + game.potAmount);
      const pointsGain = Math.floor(game.currentBet * 1.5);
      game.setPlayerPoints(game.playerPoints + pointsGain);
      game.setGameStatus(`You win ₹${game.potAmount}! ${playerHand.type} beats ${dealerHand.type}`);
      
      toast({
        title: "You Won!",
        description: `₹${game.potAmount} added to your balance`,
      });
    } else {
      const pointsLoss = Math.floor(game.currentBet * 0.5);
      game.setPlayerPoints(Math.max(0, game.playerPoints - pointsLoss));
      game.setGameStatus(`Dealer wins with ${dealerHand.type} against your ${playerHand.type}`);
      
      toast({
        title: "Dealer Won",
        description: "Better luck next time!",
        variant: "destructive"
      });
    }
    game.setPotAmount(0);
  }

  function fold() {
    if (game.isTransitioning) return;
    game.setGameOver(true);
    game.setIsTransitioning(true);
    
    flipCards().then(() => {
      game.setIsTransitioning(false);
    });
    game.setGameStatus(`You folded. Lost ₹${game.potAmount}`);
    game.setPotAmount(0);
  }

  function claimPrize() {
    const currentPrize = prizes.filter(prize => game.playerPoints >= prize.points).pop();
    if (!currentPrize) return;
    
    game.addClaimedPrize({
      ...currentPrize,
      activated: false,
      claimedAt: new Date()
    });

    switch (currentPrize.reward.type) {
      case 'spin':
        game.setGameStatus(`Claimed ${currentPrize.reward.value} free spin${currentPrize.reward.value > 1 ? 's' : ''}!`);
        break;
      case 'bonus':
        const bonusAmount = Math.floor(game.playerBalance * currentPrize.reward.value);
        game.setPlayerBalance(game.playerBalance + bonusAmount);
        game.setGameStatus(`Claimed ${currentPrize.reward.value * 100}% bonus: ₹${bonusAmount} added!`);
        break;
      case 'balance':
        game.setPlayerBalance(game.playerBalance + currentPrize.reward.value);
        game.setGameStatus(`Claimed ₹${currentPrize.reward.value} instant balance!`);
        break;
    }

    game.setPlayerPoints(0);
  }

  return (
    <Card className="p-8" itemScope itemType="https://schema.org/Game">
      <meta itemProp="name" content="Teen Patti" />
      <meta itemProp="description" content="Classic Indian card game with real-time multipliers and rewards" />
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold" itemProp="headline">Teen Patti</h1>
        <ClaimedPrizes />
      </div>

      <div className="space-y-8">
        <PrizeScale prizes={prizes} onClaimPrize={claimPrize} />
        
        <div className="game-status text-center">
          <p className="text-lg">{game.gameStatus}</p>
          <p className="text-xl font-bold text-green-600">Balance: ₹{game.playerBalance}</p>
          <p className="text-lg text-blue-600">Points: {game.playerPoints}</p>
        </div>

        <GameCards />
        
        <GameControls
          onStartGame={startGame}
          onPlay={play}
          onFold={fold}
        />
      </div>
    </Card>
  );
}