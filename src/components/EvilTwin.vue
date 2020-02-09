<template>
  <q-page id="evil-twin" class="flex flex-center evil-twin">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 25px"><h3>Who is your Evil Twin?</h3></div>
      <div class="row justify-center">
          <div class="row">
            <q-select outlined v-model="persType" :options="persTypes" label="Personality Type" class="pers-dd"/>
            <q-btn round color="brown-5" icon="directions" style="margin-left: 25px" size="lg" @click="herp"/>
          </div>
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
          persType: ''
      }
    },
    method: {
      herp() {
          console.log('hello');
      }
    }
}

</script>
