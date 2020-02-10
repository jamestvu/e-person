<template>
  <q-page class="q-pa-md flex flex-center text-center">
    <div class="text-h3">Manager Personalities</div>
    <div class="row q-gutter-md">
      <template v-for="(manager, index) in managers">
        <div class="col text-black" :key="index">
          <q-card>
            <q-card-section>
              <img src="../assets/profile-placeholder.png"
                   style="width: 100%; height: 100%"
                   @mouseenter="manager.imageToggle = !manager.imageToggle"
                   v-if="!manager.imageToggle"
              >
              <div v-if="manager.imageToggle">
                <img :src="manager.image"
                     style="width: 100%; height: 100%"
                     @mouseleave="manager.imageToggle = !manager.imageToggle"
                >
                <div class="text-subtitle1">{{ manager.trait }}</div>
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
    <div class="text-center">DISCLAIMER: Only Tom submitted his results. (and Dean obviously)</div>
  </q-page>
</template>

<style>
  body {
    background-color: #5F5980;
    color: white;
  }

  #managers .personality {
    border-radius: 50%;
  }

  #managers img {
    height: 250px;
    width: 250px;
  }
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
              image: 'https://static.neris-assets.com/images/personality-types/famous/sentinels_ESFJ_bill_clinton.svg?v=3'
            },
            {
              name: 'Joel',
              nickname: 'JoJo',
              imageToggle: false,
              trait: 'Defender (ISFJ-A)',
              image: 'https://static.neris-assets.com/images/personality-types/famous/sentinels_ISFJ_captain_america.svg?v=3'
            },
            {
              name: 'Rex',
              nickname: 'Dino',
              imageToggle: false,
              trait: 'Logician (INTP-A)',
              image: 'https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_neo_the_matrix.svg?v=3'
            },
            {
              name: 'Steve',
              nickname: 'Sakats',
              imageToggle: false,
              trait: 'Campaigner (ENFP-A)',
              image: 'https://static.neris-assets.com/images/personality-types/famous/diplomats_ENFP_willy_wonka_charlie_and_the_chocolate_factory.svg?v=3'
            },
            {
              name: 'Bhanu',
              nickname: 'The Stache',
              imageToggle: false,
              trait: 'Entertainer (ESFP-A)',
              image: 'https://static.neris-assets.com/images/personality-types/famous/explorers_ESFP_steve_irwin.svg?v=3'
            },
            {
              name: 'Dean',
              nickname: 'Dean the Destroyer',
              imageToggle: false,
              trait: 'Destroyer (DEAN-S)',
              image: 'https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bruce_banner.svg?v=3'
            },
          ]
      }
    },
}

</script>
