<template>
  <q-page class="flex flex-center think-feel" style="padding-bottom: 100px">
    <div class="q-pa-md" style="margin-bottom: 100px">
      <h3 class="text-center">Thinkers Vs. Feelers</h3>
      <div class="row wrap justify-center">
        <div class="col-xs-6 text-center full-height">
            <img class="tf-img" alt="thinking" src="../assets/thinker.png" width="100%">
            <div class="text-h3">31%</div>
            <div class="text-h5">Thinking (T)</div>
        </div>
        <div class="col-xs-6 text-center full-height">
            <img class="tf-img" alt="feeling" src="../assets/feeling.png" width="100%">
            <div class="text-h3">69%</div>
            <div class="text-h5">Feeling (F)</div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#e5e5e5" points="0,100 100,0 100,100"/>
    </svg>
  </q-page>
</template>

<style>
  .think-feel {
    background-color: #2d92cc;
    color: white;
  }
  .tf-img {
    height: 300px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'ThinkVsFeel.vue'
}
</script>
