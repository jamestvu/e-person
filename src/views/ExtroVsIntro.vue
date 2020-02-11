<template>
  <q-page class="flex flex-center extro-intro" style="padding-bottom: 100px">
    <div class="q-pa-md" style="margin-bottom: 100px">
      <h3 class="text-center">Extroverts Vs. Introverts</h3>
      <div class="row wrap justify-center">
        <div class="col-xs-6 text-center full-height">
          <img class="ei-img" alt="introverts" src="../assets/introverts.png" width="100%">
          <div class="text-h3">35%</div>
          <div class="text-h5">Extroverts (E)</div>
        </div>
        <div class="col-xs-6 text-center full-height">
          <img class="ei-img" alt="extroverts" src="../assets/extrovert.png" width="100%">
          <div class="text-h3">65%</div>
          <div class="text-h5">Introverts (I)</div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#E5E5E5" points="0,100 100,0 100,100"/>
    </svg>
  </q-page>
</template>

<style>
  .extro-intro {
    background-color: #2d92cc;
    /*color: white;*/
    position: relative;
  }
  .ei-img {
    height: 300px;
    position: relative;
  }

  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
    /* set height to pixels if you want angle to change with screen width */
  }
</style>

<script>
export default {
  name: 'ExtroVsIntro'
}
</script>
