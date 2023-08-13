import { defineStore } from 'pinia'

export const useSignupStepsStore = defineStore('steps', {
  state: () => ({
    step: 0
  }),

  actions: {
    next() {
      this.step++
    },
    previous() {
      this.step--
    }
  },

  getters: {
    GET_step: (state) => state.step
  }
})
