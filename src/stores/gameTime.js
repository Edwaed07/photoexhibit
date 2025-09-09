import { defineStore } from 'pinia';

export const useGameTime = defineStore('game', {
  state: () => ({
    TimeList: []
  }),
  actions: {
    addTimer(timer) {
      this.TimeList.push(timer);
    }
  }
});
