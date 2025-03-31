import { create } from 'zustand';

interface Card {
  suit: string;
  rank: string;
}

interface Prize {
  points: number;
  description: string;
  reward: {
    type: string;
    value: number;
  };
  activated?: boolean;
  claimedAt?: Date;
}

interface GameState {
  playerCards: Card[];
  dealerCards: Card[];
  playerBalance: number;
  playerPoints: number;
  currentBet: number;
  potAmount: number;
  ante: number;
  gameStatus: string;
  hasDealtCards: boolean;
  gameOver: boolean;
  isTransitioning: boolean;
  cardStates: {
    player: boolean[];
    dealer: boolean[];
  };
  claimedPrizes: Prize[];
  setPlayerCards: (cards: Card[]) => void;
  setDealerCards: (cards: Card[]) => void;
  setPlayerBalance: (balance: number) => void;
  setPlayerPoints: (points: number) => void;
  setCurrentBet: (bet: number) => void;
  setPotAmount: (amount: number) => void;
  setGameStatus: (status: string) => void;
  setHasDealtCards: (hasDealt: boolean) => void;
  setGameOver: (isOver: boolean) => void;
  setIsTransitioning: (isTransitioning: boolean) => void;
  setCardStates: (states: { player: boolean[]; dealer: boolean[]; }) => void;
  addClaimedPrize: (prize: Prize) => void;
  activatePrize: (index: number) => void;
  resetGame: () => void;
}

const initialState = {
  playerCards: Array(3).fill({ rank: '', suit: '' }),
  dealerCards: Array(3).fill({ rank: '', suit: '' }),
  playerBalance: 100,
  playerPoints: 0,
  currentBet: 10,
  potAmount: 0,
  ante: 5,
  gameStatus: 'Place your bet to start!',
  hasDealtCards: false,
  gameOver: false,
  isTransitioning: false,
  cardStates: {
    player: [false, false, false],
    dealer: [false, false, false]
  },
  claimedPrizes: []
};

export const useGameStore = create<GameState>((set) => ({
  ...initialState,
  setPlayerCards: (cards) => set({ playerCards: cards }),
  setDealerCards: (cards) => set({ dealerCards: cards }),
  setPlayerBalance: (balance) => set({ playerBalance: balance }),
  setPlayerPoints: (points) => set({ playerPoints: points }),
  setCurrentBet: (bet) => set({ currentBet: bet }),
  setPotAmount: (amount) => set({ potAmount: amount }),
  setGameStatus: (status) => set({ gameStatus: status }),
  setHasDealtCards: (hasDealt) => set({ hasDealtCards: hasDealt }),
  setGameOver: (isOver) => set({ gameOver: isOver }),
  setIsTransitioning: (isTransitioning) => set({ isTransitioning: isTransitioning }),
  setCardStates: (states) => set({ cardStates: states }),
  addClaimedPrize: (prize) => set((state) => ({
    claimedPrizes: [...state.claimedPrizes, prize]
  })),
  activatePrize: (index) => set((state) => ({
    claimedPrizes: state.claimedPrizes.map((prize, i) =>
      i === index ? { ...prize, activated: true } : prize
    )
  })),
  resetGame: () => set((state) => ({
    ...initialState,
    playerBalance: state.playerBalance,
    playerPoints: state.playerPoints,
    claimedPrizes: state.claimedPrizes
  }))
}));