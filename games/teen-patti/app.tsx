<template>
  <div class="top-bar">
    <ClaimedPrizes 
      :prizes="claimedPrizes"
      @activate-prize="activatePrize"
    />
    <div class="lang-picker">
      <select v-model="currentLocale" @change="changeLocale(currentLocale)">
        <option value="en">🇬🇧 English</option>
        <option value="hi">🇮🇳 Hindi</option>
      </select>
    </div>
  </div>
  <div class="game-container">
    <h1>{{ $t('title') }}</h1>
    <div class="prize-scale-wrapper">
    <PrizeScale 
      :points="playerPoints"
      :prizes="prizes"
      @claim-prize="claimPrize"
    />
    </div>
    
    <div class="game-status">
      <p>{{ gameStatus }}</p>
      <p class="balance">{{ $t('balance', { balance: playerBalance }) }}</p>
      <p class="points">{{ $t('points', { points: playerPoints }) }}</p>
    </div>

    <GameCards 
      
      :dealer-cards="dealerCards"
      :player-cards="playerCards"
      :card-states="cardStates"
    />

    <GameControls
      v-model:currentBet="currentBet"
      :player-balance="playerBalance"
      :has-dealt-cards="hasDealtCards"
      :game-over="gameOver"
      @start-game="startGame"
      @play="play"
      @fold="fold"
      @reset-game="resetGame"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import PrizeScale from './components/PrizeScale.vue'
import GameCards from './components/GameCards.vue'
import GameControls from './components/GameControls.vue'
import ClaimedPrizes from './components/ClaimedPrizes.vue'

const { locale, t } = useI18n()
const currentLocale = ref('en')
const claimedPrizes = ref([])

const changeLocale = (lang) => {
  locale.value = lang
  currentLocale.value = lang
}

const suits = ['♠', '♥', '♦', '♣']
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const playerCards = ref([])
const dealerCards = ref([])
const playerBalance = ref(100)
const playerPoints = ref(0)
const currentBet = ref(10)
const potAmount = ref(0)
const ante = ref(5) // Initial forced bet
const gameStatus = ref('Place your bet to start!')
const hasDealtCards = ref(false)
const gameOver = ref(false)
const isTransitioning = ref(false)
const cardStates = ref({
  player: [false, false, false],
  dealer: [false, false, false]
})

// Initialize empty cards for display
playerCards.value = Array(3).fill({ rank: '', suit: '' })
dealerCards.value = Array(3).fill({ rank: '', suit: '' })
const prizes = [ 
  { points: 100, description: '150% Deposit Bonus', reward: { type: 'bonus', value: 1.5 } },
  { points: 200, description: '3 Free Spins', reward: { type: 'spin', value: 3 } },
  { points: 300, description: '300% Deposit Bonus', reward: { type: 'bonus', value: 3 } },
  { points: 400, description: '₹100 Instant Cash', reward: { type: 'balance', value: 100 } },
  { points: 500, description: '500% Deposit Bonus', reward: { type: 'bonus', value: 5 } },
  { points: 600, description: '10 Free Spins', reward: { type: 'spin', value: 10 } },
  { points: 700, description: '₹500 Instant Cash', reward: { type: 'balance', value: 500 } },
  { points: 800, description: '700% Deposit Bonus', reward: { type: 'bonus', value: 7 } },
  { points: 900, description: '20 Free Spins', reward: { type: 'spin', value: 20 } },
  { points: 1000, description: '₹750 Instant Cash', reward: { type: 'balance', value: 750 } }
]

const visiblePrizes = computed(() => {
  const currentIndex = prizes.findIndex(prize => prize.points > playerPoints.value)
  const startIndex = Math.max(0, currentIndex - 2)
  return prizes.slice(startIndex, startIndex + 4)
})

const getCurrentPrize = computed(() => {
  return prizes.filter(prize => playerPoints.value >= prize.points).pop()
})

const canClaimPrize = computed(() => {
  return getCurrentPrize.value !== undefined
})

const isValidBet = computed(() => {
  return currentBet.value >= 10 && currentBet.value <= playerBalance.value
})

function createDeck() {
  const deck = []
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank })
    }
  }
  return deck
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function dealCards() {
  const deck = shuffle(createDeck())
  playerCards.value = deck.slice(0, 3)
  dealerCards.value = deck.slice(3, 6)
}

function getHandRank(cards) {
  // Sort cards by rank
  const sortedCards = [...cards].sort((a, b) => {
    return ranks.indexOf(b.rank) - ranks.indexOf(a.rank)
  })

  // Check for trail (three of a kind)
  if (sortedCards[0].rank === sortedCards[1].rank && 
      sortedCards[1].rank === sortedCards[2].rank) {
    return { type: 'Trail', value: ranks.indexOf(sortedCards[0].rank) }
  }

  // Check for pure sequence
  const isSequence = ranks.indexOf(sortedCards[0].rank) === ranks.indexOf(sortedCards[1].rank) + 1 &&
                    ranks.indexOf(sortedCards[1].rank) === ranks.indexOf(sortedCards[2].rank) + 1
  const isPure = sortedCards[0].suit === sortedCards[1].suit && 
                 sortedCards[1].suit === sortedCards[2].suit

  if (isSequence && isPure) {
    return { type: 'Pure Sequence', value: ranks.indexOf(sortedCards[0].rank) }
  }

  // Check for sequence
  if (isSequence) {
    return { type: 'Sequence', value: ranks.indexOf(sortedCards[0].rank) }
  }

  // Check for color
  if (isPure) {
    return { type: 'Color', value: ranks.indexOf(sortedCards[0].rank) }
  }

  // Check for pair
  if (sortedCards[0].rank === sortedCards[1].rank || 
      sortedCards[1].rank === sortedCards[2].rank) {
    return { type: 'Pair', value: ranks.indexOf(sortedCards[1].rank) }
  }

  // High card
  return { type: 'High Card', value: ranks.indexOf(sortedCards[0].rank) }
}

function compareHands(playerHand, dealerHand) {
  const handTypes = ['High Card', 'Pair', 'Color', 'Sequence', 'Pure Sequence', 'Trail']
  
  if (handTypes.indexOf(playerHand.type) > handTypes.indexOf(dealerHand.type)) {
    return 'player'
  } else if (handTypes.indexOf(playerHand.type) < handTypes.indexOf(dealerHand.type)) {
    return 'dealer'
  } else {
    return playerHand.value > dealerHand.value ? 'player' : 'dealer'
  }
}

function startGame() {
  if (!isValidBet.value) return
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  cardStates.value = {
    player: [false, false, false],
    dealer: [false, false, false]
  }
  
  // Take ante from both player and dealer
  playerBalance.value -= ante.value
  potAmount.value = ante.value * 2 // Both player and dealer ante
  
  dealCards()
  hasDealtCards.value = true
  gameStatus.value = t('potStatus', { pot: potAmount.value, bet: currentBet.value })
  gameOver.value = false
  
  // Flip player cards with a slight delay
  setTimeout(() => {
    cardStates.value = {
      player: [true, true, true],
      dealer: [false, false, false]
    }
    isTransitioning.value = false
  }, 300)
}

async function flipCards() {
  for (let i = 0; i < dealerCards.value.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 500))
    cardStates.value.dealer[i] = true
  }
}

function play() {
  if (isTransitioning.value) return
  gameOver.value = true
  isTransitioning.value = true
  
  // Add current bet to pot
  playerBalance.value -= currentBet.value
  potAmount.value += currentBet.value * 2 // Both player and dealer match the bet
  
  flipCards().then(() => {
    isTransitioning.value = false
  })
  const playerHand = getHandRank(playerCards.value)
  const dealerHand = getHandRank(dealerCards.value)
  const winner = compareHands(playerHand, dealerHand)
  
  if (winner === 'player') {
    playerBalance.value += potAmount.value // Win entire pot
    // Award more points for winning to make movement more noticeable
    const pointsGain = Math.floor(currentBet.value * 1.5)
    playerPoints.value = playerPoints.value + pointsGain
    gameStatus.value = t('youWin', { amount: potAmount.value, playerHand: playerHand.type, dealerHand: dealerHand.type })
  } else {
    // Lose some points when losing to create backward movement
    const pointsLoss = Math.floor(currentBet.value * 0.5)
    playerPoints.value = Math.max(0, playerPoints.value - pointsLoss)
    gameStatus.value = t('dealerWins', { amount: potAmount.value, playerHand: playerHand.type, dealerHand: dealerHand.type })
  }
  potAmount.value = 0 // Reset pot
}

function claimPrize() {
  const prize = getCurrentPrize.value
  if (!prize) return
  
  // Add to claimed prizes
  claimedPrizes.value.push({
    ...prize,
    activated: false,
    claimedAt: new Date()
  })

  switch (prize.reward.type) {
    case 'spin':
      gameStatus.value = `Claimed ${prize.reward.value} free spin${prize.reward.value > 1 ? 's' : ''}!`
      // Implementation for free spins would go here
      break
    case 'bonus':
      const bonusAmount = Math.floor(playerBalance.value * prize.reward.value)
      playerBalance.value += bonusAmount
      gameStatus.value = `Claimed ${prize.reward.value * 100}% bonus: ₹${bonusAmount} added!`
      break
    case 'balance':
      playerBalance.value += prize.reward.value
      gameStatus.value = `Claimed ₹${prize.reward.value} instant balance!`
      break
  }

  playerPoints.value = 0 // Reset points after claiming
}

function activatePrize(index) {
  claimedPrizes.value[index].activated = true
  
  const prize = claimedPrizes.value[index]
  switch (prize.reward.type) {
    case 'spin':
      // Implementation for activating free spins
      break
    case 'bonus':
      const bonusAmount = Math.floor(playerBalance.value * prize.reward.value)
      playerBalance.value += bonusAmount
      gameStatus.value = `Activated ${prize.reward.value * 100}% bonus: ₹${bonusAmount} added!`
      break
    case 'balance':
      // Code is copied to clipboard automatically in the component
      break
  }
}
function fold() {
  if (isTransitioning.value) return
  gameOver.value = true
  isTransitioning.value = true
  
  flipCards().then(() => {
    isTransitioning.value = false
  })
  gameStatus.value = t('youFolded', { amount: potAmount.value })
  potAmount.value = 0 // Reset pot
}

function resetGame() {
  if (isTransitioning.value) return
  
  // Reset to empty cards but keep them visible
  playerCards.value = Array(3).fill({ rank: '', suit: '' })
  dealerCards.value = Array(3).fill({ rank: '', suit: '' })
  currentBet.value = 10
  // Don't reset points or balance when starting new game
  cardStates.value = {
    player: [false, false, false],
    dealer: [false, false, false]
  }
  hasDealtCards.value = false
  gameOver.value = false
  potAmount.value = 0
  gameStatus.value = t('startPrompt')
}
</script>

<style>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #1976D2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}

.lang-picker select {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  appearance: none;
  padding-right: 30px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
}

.lang-picker select:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.lang-picker select option {
  background: white;
  color: #333;
}

.game-container {
  width: min(800px, 95vw);
  height: min(700px, 85vh);
  position: relative;
  margin: 0 auto;
  margin-top: 32px;
  padding: clamp(10px, 2vh, 20px);
  text-align: center;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  overflow: hidden;
}

.prize-scale-wrapper {
  height: 60px;
  position: relative;
}

.game-status {
  
  margin: 0;
  font-size: clamp(1rem, 4vw, 1.4rem);
  font-weight: 500;
  padding: 0;
}

.balance {
  font-weight: bold;
  color: #2E7D32;
  font-size: clamp(0.9rem, 3.5vw, 1.2rem);
}

h1 {
  font-size: clamp(1.2rem, 4vw, 2rem);
  margin: 0;
}
</style>