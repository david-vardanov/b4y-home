<template>
  <div class="claimed-prizes-container">
    <button 
      class="toggle-button"
      @click="isOpen = !isOpen"
      :class="{ active: isOpen }"
    >
      🎁 Claimed Prizes
      <span v-if="pendingCount" class="pending-count">{{ pendingCount }}</span>
    </button>
    
    <div 
      class="prizes-drawer"
      :class="{ open: isOpen }"
    >
      <div class="prizes-content">
        <h3>Your Rewards</h3>
        <button class="close-button" @click="isOpen = false">×</button>
        <div v-if="prizes.length === 0" class="no-prizes">
          No prizes claimed yet
        </div>
        <div v-else class="prizes-list">
          <div 
            v-for="(prize, index) in prizes" 
            :key="index"
            class="prize-item"
            :class="{ activated: prize.activated }"
          >
            <div class="prize-info">
              <span class="prize-type">
                {{ getPrizeIcon(prize.reward.type) }}
              </span>
              <span class="prize-description">{{ prize.description }}</span>
            </div>
            <button 
              v-if="!prize.activated"
              @click="activatePrize(index)"
              class="activate-button"
            >
              {{ prize.reward.type === 'balance' ? 'Copy Code' : 'Activate' }}
            </button>
            <span v-else class="activated-label">
              {{ prize.reward.type === 'balance' ? 'Copied!' : 'Activated' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  prizes: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['activate-prize'])

const isOpen = ref(false)

const pendingCount = computed(() => {
  return props.prizes.filter(prize => !prize.activated).length
})

function getPrizeIcon(type) {
  switch (type) {
    case 'bonus':
      return '💰'
    case 'spin':
      return '🎰'
    case 'balance':
      return '🎫'
    default:
      return '🎁'
  }
}

async function activatePrize(index) {
  const prize = props.prizes[index]
  
  if (prize.reward.type === 'balance') {
    try {
      await navigator.clipboard.writeText(`BONUS-${Math.random().toString(36).substring(7).toUpperCase()}`)
      emit('activate-prize', index)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
    }
  } else {
    emit('activate-prize', index)
  }
}
</script>

<style scoped>
.claimed-prizes-container {
  position: relative;
}

.toggle-button {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
  transition: all 0.3s ease;
}

.toggle-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(25, 118, 210, 0.4);
}

.toggle-button.active {
  background: rgba(255, 255, 255, 0.2);
}

.pending-count {
  background: #ff4081;
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0 4px;
}

.prizes-drawer {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 300px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(120%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.prizes-drawer.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.prizes-content {
  position: relative;
  padding: 20px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: #f5f5f5;
  color: #666;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: #e0e0e0;
  color: #333;
  transform: scale(1.1);
}

h3 {
  margin: 0 0 15px;
  color: #1976D2;
}

.no-prizes {
  text-align: center;
  color: #666;
  padding: 20px 0;
}

.prizes-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
}

.prize-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.prize-item:hover {
  background: #eeeeee;
}

.prize-item.activated {
  opacity: 0.7;
}

.prize-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.prize-type {
  font-size: 20px;
}

.prize-description {
  font-size: 14px;
  color: #333;
}

.activate-button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.activate-button:hover {
  background: #43A047;
  transform: translateY(-1px);
}

.activated-label {
  font-size: 12px;
  color: #4CAF50;
  font-weight: 500;
}
</style>