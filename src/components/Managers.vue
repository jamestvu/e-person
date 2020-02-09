<template>
  <q-page id="managers" class="flex flex-center think-feel">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Manager Personalities</h3></div>
      <div class="row justify-center">

        <div class="col-2" @mouseleave="tom.showPersonality = false">
          <div class="row">
            <div v-show="!tom.showPersonality">
              <img alt="tom" src="../assets/profile-placeholder.png"
                   @mouseover="tom.showPersonality = true" />
              <div class="row justify-center">
                <h5>Big T</h5>
              </div>
            </div>

            <div v-show="tom.showPersonality">
              <img alt="tom" src="https://static.neris-assets.com/images/personality-types/famous/sentinels_ESFJ_bill_clinton.svg?v=3"/>
              <h5 class="row justify-center">Consul (ESFJ-A)</h5>
            </div>
          </div>
        </div>

        <div class="col-2" @mouseleave="joel.showPersonality = false">
          <div class="row">
            <div v-show="!joel.showPersonality">
              <img alt="tom" src="../assets/profile-placeholder.png"
                   @mouseover="joel.showPersonality = true" />
              <div class="row justify-center">
                <h5>JoJo</h5>
              </div>
            </div>

            <div v-show="joel.showPersonality">
              <img alt="joel" src="https://static.neris-assets.com/images/personality-types/famous/sentinels_ISFJ_captain_america.svg?v=3"/>
              <h5 class="row justify-center">Defender (ISFJ-A)</h5>
            </div>
          </div>
        </div>

        <div class="col-2" @mouseleave="rex.showPersonality = false">
          <div class="row">
            <div v-show="!rex.showPersonality">
              <img alt="tom" src="../assets/profile-placeholder.png"
                   @mouseover="rex.showPersonality = true" />
              <div class="row justify-center">
                <h5>Dino</h5>
              </div>
            </div>

            <div v-show="rex.showPersonality">
              <img alt="rex" src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_neo_the_matrix.svg?v=3"/>
              <h5 class="row justify-center">Logician (INTP-A)</h5>
            </div>
          </div>
        </div>

        <div class="col-2" @mouseleave="steve.showPersonality = false">
          <div class="row">
            <div v-show="!steve.showPersonality">
              <img alt="tom" src="../assets/profile-placeholder.png"
                   @mouseover="steve.showPersonality = true" />
              <div class="row justify-center">
                <h5>Sakats</h5>
              </div>
            </div>

            <div v-show="steve.showPersonality">
              <img alt="steve" src="https://static.neris-assets.com/images/personality-types/famous/diplomats_ENFP_willy_wonka_charlie_and_the_chocolate_factory.svg?v=3"/>
              <h5 class="row justify-center">Campaigner (ENFP-A)</h5>
            </div>
          </div>
        </div>

        <div class="col-2" @mouseleave="bhanu.showPersonality = false">
          <div class="row">
            <div v-show="!bhanu.showPersonality">
              <img alt="tom" src="../assets/profile-placeholder.png"
                   @mouseover="bhanu.showPersonality = true" />
              <div class="row justify-center">
                <h5>The Stache</h5>
              </div>
            </div>

            <div v-show="bhanu.showPersonality">
              <img alt="bhanu" src="https://static.neris-assets.com/images/personality-types/famous/explorers_ESFP_steve_irwin.svg?v=3"/>
              <h5 class="row justify-center">Entertainer (ESFP-A)</h5>
            </div>
          </div>
        </div>

        <div class="col-2" @mouseleave="dean.showPersonality = false">
          <div class="row">
            <div v-show="!dean.showPersonality">
              <img alt="tom" src="../assets/profile-placeholder.png"
                   @mouseover="dean.showPersonality = true" />
              <div class="row justify-center">
                <h5>Dean the Destroyer</h5>
              </div>
            </div>

            <div v-show="dean.showPersonality">
              <img alt="dean" src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bruce_banner.svg?v=3"/>
              <h5 class="row justify-center">Destroyer (DEAN-S)</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<style>
  #managers {
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
          tom: {showPersonality: false},
          joel: {showPersonality: false},
          rex: {showPersonality: false},
          steve: {showPersonality: false},
          bhanu: {showPersonality: false},
          dean: {showPersonality: false}
      }
    },
}

</script>
