<template>
  <q-page class="flex flex-center judge-prosp">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Judgers Vs. Prospectors</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row jp-img" alt="judging" src="../assets/introverts.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>31%</h3>
          </div>
          <div class="row justify-center">
            <h5>Judging (J)</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row jp-img" alt="prospecting" src="../assets/extrovert.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>69%</h3>
          </div>
          <div class="row justify-center">
            <h5>Prospector (P)</h5>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
  .judge-prosp {
    background-color: white;
    color: black;
  }
  .jp-img {
    height: 300px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'JudgeVsProspect.vue'
}
</script>
