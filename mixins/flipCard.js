export default {
  data() {
    return {

    cards:  [
    {
      flipped: false,
    },

],
      error: false,
    


    }

  },
  methods: {
    toggleCard (card) {
      this.cards[0].flipped = !this.cards[0].flipped
    },
  
  }
}