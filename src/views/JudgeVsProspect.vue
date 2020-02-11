<template>
  <q-page class="flex flex-center judge-prosp" style="padding-bottom: 100px">
    <div class="q-pa-md" style="margin-bottom: 100px">
      <h3 class="text-center">Judgers Vs. Prospectors</h3>
      <div class="row wrap justify-center">
        <div class="col-xs-6 text-center full-height">
            <img class="jp-img" alt="judging" src="../assets/judge.png">
            <div class="text-h3">63%</div>
            <div class="text-h5">Judging (J)</div>
        </div>
        <div class="col-xs-6 text-center full-height">
            <img class="jp-img" alt="prospecting" src="../assets/prospect.png">
            <div class="text-h3">37%</div>
            <div class="text-h5">Prospector (P)</div>
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

  @media only screen and (max-width: 600px)  {
    .jp-img {
      width: 90%;
    }
  }
</style>

<script>
export default {
  name: 'JudgeVsProspect.vue'
}
</script>
