<template>
  <q-page id="evil-twin" class="flex flex-center evil-twin" style="padding-bottom: 100px">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 25px"><h3>Who is your Evil Twin?</h3></div>
      <div class="row justify-center">
          <div class="row">
            <q-select outlined v-model="persType" :options="persTypes" label="Personality Type" class="pers-dd"/>
            <q-btn round color="brown-5" icon="directions" style="margin-left: 25px" size="lg"
                   v-bind:disabled="persType == ''" @click="computeTwin()"/>
          </div>
      </div>
      <div class="row justify-center" style="margin-top: 25px">
        <img v-if="resultPic != ''" alt="persTypePic" class="row"
             :src="resultPic" style="height: 150px; width: 150px"/>
      </div>
      <div class="row justify-center">
        <h5>{{twinResultText}}</h5>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg>
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

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vw;
    /* set height to pixels if you want angle to change with screen width */
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
          twinResultText: '',
          resultPic: ''
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
        if (this.twinResultText.indexOf('Shrek') != -1) {
            this.resultPic = 'https://purepng.com/public/uploads/medium/purepng.com-shrek-headshrekcomputer-animatedfantasy-filmfairy-talebook-17015286538907odjy.png';
        }
      },
      computeENTJ() { //ISFP
          let possiblePeople = ['Russel T', 'Staley C', 'Avril Lavigne', 'Michael Jackson', 'Britney Spears', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/isfp-adventurer-s1-v1-female.svg';
      },
      computeENTP() { //ISFJ
          let possiblePeople = ['Brian D', 'Trent P', 'Amanda W', 'Beyonce', 'Vin Diesel', 'Selena Gomez', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/isfj-defender-s1-v1-female.svg';
      },
      computeENFJ() { //ISTP
          let possiblePeople = ['James V', 'Ashley F', 'Jennifer L', 'Clint Eastwood', 'Michael Jordan', 'Tom Cruise', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/istp-virtuoso-s1-v1-female.svg';
      },
      computeENFP() { // ISTJ
          let possiblePeople = ['James V', 'Ashley F', 'Jennifer L', 'Hermione Granger', 'George Washington', 'The Witcher', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/istj-logistician-s1-v1-female.svg';
      },
      computeESTJ() { // INFP
          let possiblePeople = ['Austyn B', 'Garry H', 'Tyler N', 'Kaitlyn T', 'William Shakespeare', 'Julia Roberts', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/infp-mediator-s1-v1-female.svg';
      },
      computeESTP() { // INFJ
          let possiblePeople = ['Eric W', 'David D', 'Gene H', 'Kaelyn H', 'Bentley J', 'Mark M', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/infj-advocate-s1-v1-female.svg';
      },
      computeESFJ() { //INTP
          let possiblePeople = ['Crystal Y', 'Wayne N', 'Lee Ann C', 'Alvin P', 'Jason W', 'Bill Gates', 'Albert Einstein', 'Issac Newton', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/intp-logician-s1-v1-female.svg';
      },
      computeESFP() { // INTJ
          let possiblePeople = ['Crystal Y', 'Wayne N', 'Lee Ann C', 'Alvin P', 'Jason W', 'Elon Musk', 'Michelle Obama', 'Arnold Schwarzenegger', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/intj-architect-s1-v1-female.svg';
      },
      computeINTJ() { //ESFP
          let possiblePeople = ['Elton John', 'Adele', 'Jamie Foxx', 'Kaitlin W', 'Jason W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/esfp-entertainer-s1-v1-female.svg';
      },
      computeINTP() { // ESFJ
          let possiblePeople = ['Taylor Swift', 'Bill Clinton', 'Steve Harvey', 'Kaitlin W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/esfj-consul-s1-v1-female.svg';
      },
      computeINFJ() { // ESTP
          let possiblePeople = ['Jack Nicholson', 'Madonna', 'Steve Harvey', 'Kaitlin W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/estp-entrepreneur-s1-v1-female.svg';
      },
      computeINFP() { // ESTJ
          let possiblePeople = ['Judge Judy', 'Frank Sinatra', 'Dwight Schrute', 'Kaitlin W', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/estj-executive-s1-v1-female.svg';
      },
      computeISTJ() { // ENFP
          let possiblePeople = ['Shae J', 'Brandon L', 'Robert Downey Jr.', 'Robin Williams', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/enfp-campaigner-s1-v1-female.svg';
      },
      computeISTP() { // ENFJ
          let possiblePeople = ['Brad M', 'Mark S', 'Shannon S', 'Dean R', 'Barack Obama', 'Oprah Winfrey', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/enfj-protagonist-s1-v1-female.svg';
      },
      computeISFJ() { // ENTP
          let possiblePeople = ['Jianna O', 'Sunu', 'Mark Twain', 'Tom Hanks', 'Celine Dion', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/entp-debater-s1-v1-female.svg';
      },
      computeISFP() { // ENTJ
          let possiblePeople = ['Adi K', 'Albert R', 'Mark Twain', 'Steve Jerbs', 'Gordon Ramsay', 'Alan S', 'Shrek']
          this.twinResultText += possiblePeople[this.getRandomNum(possiblePeople.length )];
          this.resultPic = 'https://static.neris-assets.com/images/personality-types/avatars/faces/entj-commander-s1-v1-female.svg';
      },
      getRandomNum(input) {
        return Math.floor(Math.random() * input);
      }
    }
}

</script>
