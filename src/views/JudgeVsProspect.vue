<template>
  <q-page class="flex flex-center judge-prosp" style="padding-bottom: 100px">
    <div class="col" style="margin-bottom: 100px">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Judgers Vs. Prospectors</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row jp-img" alt="judging" style="margin-left: -100px" src="../assets/judge.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>60%</h3>
          </div>
          <div class="row justify-center">
            <h5>Judging (J)</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row jp-img" alt="prospecting" style="margin-left: -40px" src="../assets/prospect.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>40%</h3>
          </div>
          <div class="row justify-center">
            <h5>Prospector (P)</h5>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#5F5980" points="0,100 100,0 100,100"/>
    </svg>
  </q-page>
</template>

<style>
  .judge-prosp {
    background-color: #E5E5E5;
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
