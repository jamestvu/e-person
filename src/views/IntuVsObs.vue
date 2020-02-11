<template>
  <q-page class="flex flex-center intu-obs" style="padding-bottom: 100px">
    <div class="col" style="margin-bottom: 100px">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Intuitioners Vs. Observatoriers</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row io-img" alt="intuitive" src="../assets/intuit.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>70%</h3>
          </div>
          <div class="row justify-center">
            <h5>Intuitive (N)</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row io-eye-img" alt="observant" src="../assets/observe.png">
          </div>
          <div class="row justify-center" style="height: 75px; margin-top: -10px">
            <h3>30%</h3>
          </div>
          <div class="row justify-center">
            <h5>Observant (S)</h5>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#2d92cc" points="0,100 100,0 100,100"/>
    </svg>
  </q-page>
</template>

<style>
  .intu-obs {
    background-color: #E5E5E5;
    color: black;
  }
  .io-img {
    width: 350px;
    height: 300px;
    position: relative;
  }
  .io-eye-img {
    margin-top: -30px;
    width: 350px;
    height: 340px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'IntuVsObs.vue'
}
</script>
