<template>
  <q-page class="flex flex-center extro-intro">
    <div class="col-12">
      <div class="row justify-center" align="center" style="margin-bottom: 50px"><h3>Extroverts Vs. Introverts</h3></div>
      <div class="row justify-center">
        <div class="col-3">
          <img class="row ei-img" alt="introverts" src="../assets/introverts.png">
          <div class="row justify-center">
            <h3>32%</h3>
          </div>
          <div class="row justify-center">
            <h5>Extroverts</h5>
          </div>
        </div>
        <div class="col-6"></div>
        <div class="col-3">
          <img class="row ei-img" alt="extroverts" src="../assets/extrovert.png">
          <div class="row justify-center">
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
