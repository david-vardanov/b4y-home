<template>
  <div class="controls" v-if="!gameOver">
    <div class="bet-controls" v-if="!hasDealtCards">
      <input 
        type="number" 
        v-model.number="localBet" 
        min="10" 
        :max="playerBalance" 
        step="10"
        @input="$emit('update:currentBet', localBet)">
      <button @click="$emit('start-game')" :disabled="!isValidBet">Place Bet & Deal</button>
    </div>
    
    <div class="game-controls" v-else>
      <button @click="$emit('play')">Play</button>
      <button @click="$emit('fold')">Fold</button>
    </div>
  </div>
  <div class="bet-controls" v-else>
    <input 
      type="number" 
      v-model.number="localBet" 
      min="10" 
      :max="playerBalance" 
      step="10"
      @input="$emit('update:currentBet', localBet)">
    <button @click="$emit('start-game')" :disabled="!isValidBet">Place Bet & Deal</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  currentBet: {
    type: Number,
    required: true
  },
  isTransitioning: {
    type: Boolean,
    default: false
  },
  playerBalance: {
    type: Number,
    required: true
  },
  hasDealtCards: {
    type: Boolean,
    required: true
  },
  gameOver: {
    type: Boolean,
    required: true
  }
})

const localBet = ref(props.currentBet)

watch(() => props.currentBet, (newVal) => {
  localBet.value = newVal
})

const isValidBet = computed(() => {
  return !props.isTransitioning && localBet.value >= 10 && localBet.value <= props.playerBalance
})

defineEmits(['update:currentBet', 'start-game', 'play', 'fold', 'reset-game'])
</script>

<style scoped>
.controls {
  padding: clamp(5px, 1vh, 10px);
}

.bet-controls {
  display: flex;
  gap: clamp(8px, 2vw, 15px);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.bet-controls input {
  padding: 8px;
  width: clamp(60px, 20vw, 100px);
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  border: 2px solid #2196F3;
  border-radius: 4px;
  text-align: center;
}

button {
  padding: clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 20px);
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  margin: 0 5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:disabled {
  background-color: #E0E0E0;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.game-controls {
  display: flex;
  gap: clamp(8px, 2vw, 15px);
  flex-wrap: wrap;
  justify-content: center;
}
</style>