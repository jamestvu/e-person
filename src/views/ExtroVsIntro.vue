<template>
  <q-page class="flex flex-center extro-intro" style="padding-bottom: 100px">
    <div class="col" style="margin-bottom: 100px">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Extroverts Vs. Introverts</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row ei-img" alt="introverts" src="../assets/introverts.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>31%</h3>
          </div>
          <div class="row justify-center">
            <h5>Extroverts (E)</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row ei-img" alt="extroverts" src="../assets/extrovert.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>69%</h3>
          </div>
          <div class="row justify-center">
            <h5>Introverts (I)</h5>
          </div>
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
