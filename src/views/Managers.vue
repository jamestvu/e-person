<template>
  <q-page class="q-pa-md text-center text-white" style="background-color: #5F5980">
      <div class="text-h3 q-mt-xl">Manager Personalities</div>
      <div class="text-subtitle2">Click on any manager to find out what personality they are!</div>
      <div class="row wrap" style="margin-top: 5em">
        <template v-for="(manager, index) in managers">
          <div class="col-md-2 col-xs-4 text-black q-mb-md" :key="index">
            <q-card class="full-height q-ma-xs">
              <q-card-section>
                <div style="margin: 0 auto">
                  <img :src="manager.original"
                       style="width: 100%; height: 100%; border-radius: 50%; border: 2px solid black"
                       @click="manager.imageToggle = !manager.imageToggle"
                       v-if="!manager.imageToggle">
                  <div v-if="manager.imageToggle">
                    <img :src="manager.image"
                         @click="manager.imageToggle = !manager.imageToggle"
                    >
                    <div class="text-subtitle1">{{ manager.trait }}</div>

                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h5">{{ manager.name }}</div>
                <div class="text-caption">{{ manager.nickname }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </div>
      <br>
      <div class="text-center" >DISCLAIMER: Only Tom submitted his results. (and Dean obviously)</div>
  </q-page>
</template>

<style>
</style>

<script>

  export default {
    name: 'Managers.vue',

    data() {
      return {
        managers: [
          {
            name: 'Tom',
            nickname: 'Big T',
            imageToggle: false,
            trait: 'Consul (ESFJ-A)',
            original: require('@/assets/managers/tom.png'),
            image: 'https://static.neris-assets.com/images/personality-types/famous/sentinels_ESFJ_bill_clinton.svg?v=3'
          },
          {
            name: 'Joel',
            nickname: 'JoJo',
            imageToggle: false,
            trait: 'Defender (ISFJ-A)',
            original: require('@/assets/managers/joel.jpeg'),
            image: 'https://static.neris-assets.com/images/personality-types/famous/sentinels_ISFJ_captain_america.svg?v=3'
          },
          {
            name: 'Rex',
            nickname: 'Dino',
            imageToggle: false,
            trait: 'Logician (INTP-A)',
            original: require('@/assets/managers/rex.png'),
            image: 'https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_neo_the_matrix.svg?v=3'
          },
          {
            name: 'Steve',
            nickname: 'Sakats',
            imageToggle: false,
            trait: 'Campaigner (ENFP-A)',
            original: require('@/assets/managers/steve.png'),
            image: 'https://static.neris-assets.com/images/personality-types/famous/diplomats_ENFP_willy_wonka_charlie_and_the_chocolate_factory.svg?v=3'
          },
          {
            name: 'Bhanu',
            nickname: 'The Stache',
            imageToggle: false,
            trait: 'Entertainer (ESFP-A)',
            original: require('@/assets/managers/bhanu.png'),
            image: 'https://static.neris-assets.com/images/personality-types/famous/explorers_ESFP_steve_irwin.svg?v=3'
          },
          {
            name: 'Dean',
            nickname: 'Dean the Destroyer',
            imageToggle: false,
            trait: 'Destroyer (DEAN-S)',
            original: require('@/assets/managers/dean.png'),
            image: 'https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bruce_banner.svg?v=3'
          },
        ]
      }
    },
  }

</script>
