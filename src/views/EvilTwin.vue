<template>
  <q-page id="evil-twin" class="flex flex-center evil-twin">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 25px"><h3>Who is your Evil Twin?</h3></div>
      <div class="row justify-center">
          <div class="row">
            <q-select outlined v-model="persType" :options="persTypes" label="Personality Type" class="pers-dd"/>
            <q-btn round color="brown-5" icon="directions" style="margin-left: 25px" size="lg"
                   v-bind:disabled="persType == ''" @click="computeTwin()"/>
          </div>
      </div>
      <div class="row justify-center">
        <h4>{{twinResultText}}</h4>
      </div>
    </div>
  </q-page>
</template>

<style>
  #evil-twin {
    background-color: #E5E5E5;
    color: black;
  }

  #evil-twin .pers-dd {
    width: 300px;
    background-color: white;
  }

  #evil-twin label.q-field {
    background-color: #E5E5E5;
  }

  #evil-twin div.q-field__control {
    background-color: white;
  }

</style>

<script>

import {
    QBtn, QSelect
} from 'quasar'

export default {
  name: 'EvilTwin.vue',

    component: {
      QSelect, QBtn
    },

    data() {
      return {
          persTypes: ['ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESFJ', 'ESTP', 'ESFP',
                      'INTJ', 'INTP', 'INFJ', 'INFP', 'ISTJ', 'ISFJ', 'ISTP', 'ISFP'],
          persType: '',
          twinResultText: ''
      }
    },
    computed: {

    },
    methods: {
      computeTwin() {
        this.twinResultText = 'Your Evil Twin could possibly be...';
        switch (this.persType) {
            case 'ENTJ': this.computeENTJ(); break;
            case 'ENTP': this.computeENTP(); break;
            case 'ENFJ': this.computeENFJ(); break;
            case 'ENFP': this.computeENFP(); break;
            case 'ESTJ': this.computeESTJ(); break;
            case 'ESTP': this.computeESTP(); break;
            case 'ESFJ': this.computeESFJ(); break;
            case 'ESFP': this.computeESFP(); break;

            case 'INTJ': this.computeINTJ(); break;
            case 'INTP': this.computeINTP(); break;
            case 'INFJ': this.computeINFJ(); break;
            case 'INFP': this.computeINFP(); break;
            case 'ISTJ': this.computeISTJ(); break;
            case 'ISTP': this.computeISTP(); break;
            case 'ISFJ': this.computeISFJ(); break;
            case 'ISFP': this.computeISFP(); break;

            default: this.twinResultText += "Alan Sheen. I'm sorry.";
        }
      },
      computeENTJ() { //ISFP
          let possiblePeople = ['Russel T', 'Staley C', 'Avril Lavigne', 'Michael Jackson', 'Britney Spears', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeENTP() { //ISFJ
          let possiblePeople = ['Brian D', 'Trent P', 'Amanda W', 'Beyonce', 'Vin Diesel', 'Selena Gomez', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeENFJ() { //ISTP
          let possiblePeople = ['James V', 'Ashley F', 'Jennifer L', 'Clint Eastwood', 'Michael Jordan', 'Tom Cruise', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeENFP() { // ISTJ
          let possiblePeople = ['James V', 'Ashley F', 'Jennifer L', 'Hermione Granger', 'George Washington', 'The Witcher', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeESTJ() { // INFP
          let possiblePeople = ['Austyn B', 'Garry H', 'Tyler N', 'Kaitlyn T', 'William Shakespeare', 'Julia Roberts', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeESTP() { // INFJ
          let possiblePeople = ['Eric W', 'David D', 'Gene H', 'Kaelyn H', 'Bentley J', 'Mark M', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeESFJ() { //INTP
          let possiblePeople = ['Crystal Y', 'Wayne N', 'Lee Ann C', 'Alvin P', 'Jason W', 'Bill Gates', 'Albert Einstein', 'Issac Newton', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeESFP() { // INTF
          let possiblePeople = ['Crystal Y', 'Wayne N', 'Lee Ann C', 'Alvin P', 'Jason W', 'Elon Musk', 'Michelle Obama', 'Arnold Schwarzenegger', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeINTJ() { //ESFP
          let possiblePeople = ['Elton John', 'Adele', 'Jamie Foxx', 'Kaitlin W', 'Jason W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeINTP() { // ESFJ
          let possiblePeople = ['Taylor Swift', 'Bill Clinton', 'Steve Harvey', 'Kaitlin W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeINFJ() { // ESTP
          let possiblePeople = ['Jack Nicholson', 'Madonna', 'Steve Harvey', 'Kaitlin W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeINFP() { // ESTJ
          let possiblePeople = ['Judge Judy', 'Frank Sinatra', 'Dwight Schrute', 'Kaitlin W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeISTJ() { // ENFP
          let possiblePeople = ['Shae J', 'Brandon L', 'Robert Downey Jr.', 'Robin Williams', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeISTP() { // ENFJ
          let possiblePeople = ['Brad M', 'Mark S', 'Shannon S', 'Dean R', 'Barack Obama', 'Oprah Winfrey', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeISFJ() { // ENTP
          let possiblePeople = ['Jianna O', 'Sunu', 'Mark Twain', 'Tom Hanks', 'Celine Dion', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      computeISFP() { // ENTJ
          let possiblePeople = ['Adi K', 'Albert R', 'Mark Twain', 'Steve Jerbs', 'Gordon Ramsay', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
      },
      getRandomNum(input) {
        return Math.floor(Math.random() * input);
      }
    }
}

</script>
