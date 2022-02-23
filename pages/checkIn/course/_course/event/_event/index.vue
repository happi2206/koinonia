<template>
  <div>
    <login-nav />
    <div class="horizontalspacing pt-5">
      <div>
        <div class="mt-5 pt-5">
          <div class="pt-5">
            <h2 class="text-center largebrownparagraph">
              Welcome to your <span></span> course. Please fill in your details
              accordingly
            </h2>
          </div>
          <h2 class="largebrownparagraph text-center">Check in</h2>
          <p class="medbrownparagraph"></p>
        </div>

        <div class="bg-white mt-3 d-flex justify-content-center">
          <form
            class="forminputpadding w-75 width75"
            @submit.prevent="submitFunction"
          >
            <div class="my-4 py-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Surname
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                v-model="formInputs.surname"
                placeholder="e.g Nuella"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-4 py-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Registeration Number
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                v-model="formInputs.regNo"
                placeholder="e.g Ime"
                class="forminputs text-dark"
              />
            </div>

            <div class="my-4 py-2 d-flex justify-content-center">
              <button
                class="
                  btn
                  py-md-3 py-2
                  mainbtndashboard
                  largebrownparagraph
                  w-100
                  text-center text
                  bold700
                "
              >
                Check in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

<b-button class="bg-primary" @click="toggleCard"> Change o</b-button>
     <div id="flashcard-app" class="container">
    <ul class="">
      <li v-for="(card, index) in cards" :key="index">
        <transition name="flip">
          <div  :key="card.flipped" class="card"  @click="toggleCard()">


          <div v-if="card.flipped"> front</div>
          <div v-else> back</div>
          </div>
     
        </transition>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import flipCard from '~/mixins/flipCard'
export default {
  mixins:[flipCard],
  data() {
    return {
      formInputs: {
        surname: '',
        regNo: '',
      },
    }
  },
  methods: {
    async submitFunction() {
      try {
        await this.$axios.$post('', {
          school_id: process.env.SCHOOL_ID,
          surname: this.formInputs.surname,
          registation_number: this.formInputs.regNo,
          course_id: this.$route.params.course,
          event_id: this.$route.params.event,
        })
        this.$toast.success('Registration Successful')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style  scoped>
.width75 {
  width: 75%;
}

body {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  

  
  .container {
    max-width: 100%;
    padding: 2em;
  }
  
  .card {
    min-height: 25rem;
    background-color: #51aae5;
    border-radius: 7px;
    /* margin: 5px;
    text-align: center;
    line-height: 27px; */
    cursor: pointer;
    position: relative;
    /* color: #fff; */
    -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    will-change: transform;
    transition: all 0.3s ease;

  }
  
  .card:hover{
    transform: scale(1.03);
  }
  
 

  
  .flip-enter-active {
    transition: all 0.4s ease;
  }
  
  .flip-leave-active {
    display: none;
  }
  
  .flip-enter, .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;
  
  }
  
  /* Form */
  .flashcard-form{
    position: relative;
  }
  
  
  label{
    font-weight: 400;
    color: #333;
    margin-right: 10px;
  }
  
  input{
    border-radius: 5px;
    border: 2px solid #eaeaea;
    padding: 10px;
    outline: none;
  }
  

  
  button:hover{
    background-color: #70a66f;
  }
  
  .error{
    margin-top: 10px;
    display: block;
    color: #e44e42;
    font-weight: 600;
  }



@media (max-width: 991.5px) {
  .width75 {
    width: 85%;
  }
}
</style>
