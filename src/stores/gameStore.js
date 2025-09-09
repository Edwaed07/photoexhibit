import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    winnerList: []
  }),
  actions: {
    addWinner(winner) {
      this.winnerList.push(winner);
    }
  }
});
