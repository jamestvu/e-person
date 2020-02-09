<template>
  <q-page class="flex flex-center extro-intro">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Extroverts Vs. Introverts</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row ei-img" alt="introverts" src="../assets/introverts.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>32%</h3>
          </div>
          <div class="row justify-center">
            <h5>Extroverts</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row ei-img" alt="extroverts" src="../assets/extrovert.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>68%</h3>
          </div>
          <div class="row justify-center">
            <h5>Introverts</h5>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
  .extro-intro {
    background-color: #2d92cc;
    color: white;
  }
  .ei-rhombus {
    -webkit-transform: translateY(-20px) translateX(3px) rotate(10deg);
  }

  .ei-img {
    height: 300px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'ExtroVsIntro'
}
</script>
