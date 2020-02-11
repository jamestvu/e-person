<template>
  <q-page class="flex flex-center intu-obs" style="padding-bottom: 100px">
    <div class="q-pa-md" style="margin-bottom: 100px">
      <h3 class="text-center">Intuitioners Vs. Observatoriers</h3>
      <div class="row wrap justify-center">
        <div class="col-xs-6 text-center full-height">
            <img class="io-img" alt="intuitive" src="../assets/intuit.png" width="100%">
            <div class="text-h3">70%</div>
            <div class="text-h5">Intuitive (N)</div>
        </div>
        <div class="col-xs-6 text-center full-height">
            <img class="row io-eye-img" alt="observant" src="../assets/observe.png" width="100%">
            <div class="text-h3">30%</div>
            <div class="text-h5">Observant (S)</div>
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
    height: 300px;
    position: relative;
  }
  .io-eye-img {
    margin-top: -30px;
    height: 340px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'IntuVsObs.vue'
}
</script>
