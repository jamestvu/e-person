<template>
  <q-page class="flex flex-center intu-obs">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Intuitioners Vs Observatoriers</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row io-img" alt="intuitive" src="../assets/introverts.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>74%</h3>
          </div>
          <div class="row justify-center">
            <h5>Intuitive (N)</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row io-img" alt="observant" src="../assets/extrovert.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>26%</h3>
          </div>
          <div class="row justify-center">
            <h5>Observant (S)</h5>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
  .intu-obs {
    background-color: white;
    color: black;
  }
  .io-img {
    height: 300px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'IntuVsObs.vue'
}
</script>
