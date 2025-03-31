<template>
  <div class="cards-container">

    <div class="player-cards">
      <h2>Your Cards</h2>
      <div class="cards">
        <div v-for="(card, index) in playerCards" 
             :key="index" 
             class="card"
             :class="{ 
               'flipped': cardStates.player[index],
               'red-card': card.suit === '♥' || card.suit === '♦'
             }">
          <div class="card-inner">
            <div class="card-front">
              {{ card.rank }}{{ card.suit }}
            </div>
            <div class="card-back">
              🂠
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dealer-cards">
      <h2>Dealer's Cards</h2>
      <div class="cards">
        <div v-for="(card, index) in dealerCards" 
             :key="index" 
             class="card" 
             :class="{ 
               'flipped': cardStates.dealer[index],
               'red-card': card.suit === '♥' || card.suit === '♦'
             }">
          <div class="card-inner">
            <div class="card-front">
              {{ card.rank }}{{ card.suit }}
            </div>
            <div class="card-back">
              🂠
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
defineProps({
  playerCards: {
    type: Array,
    required: true,
    default: () => Array(3).fill({ rank: '', suit: '' })
  },
  dealerCards: {
    type: Array,
    required: true,
    default: () => Array(3).fill({ rank: '', suit: '' })
  },
  cardStates: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(10px, 2vh, 20px);
  flex: 1;
  min-height: 0;
  overflow: visible;
}

@media (min-width: 768px) {
  .cards-container {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}

.player-cards,
.dealer-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;

  justify-content: center;
  flex-wrap: nowrap;
}

.card {
  width: clamp(40px, 12vw, 60px);
  height: clamp(60px, 18vw, 90px);
  perspective: 1000px;
  margin: 2px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
  transition-delay: 0.1s;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-front {
  transform: rotateY(180deg);
}

.card-back {
  background: #2196F3;
  color: white;
  background-image: linear-gradient(45deg, #1976D2 25%, #2196F3 25%, #2196F3 50%, #1976D2 50%, #1976D2 75%, #2196F3 75%, #2196F3 100%);
  background-size: 20px 20px;
}

.red-card {
  color: #D32F2F;
}

h2 {
  color: #1565C0;
  margin: 0 0 clamp(5px, 1vh, 10px);
  font-size: clamp(1rem, 3vw, 1.4rem);
  white-space: nowrap;
}
</style>