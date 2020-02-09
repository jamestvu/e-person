<template>
  <q-page class="flex flex-center think-feel">
    <div class="col">
      <div class="row justify-center" align="center" style="margin-bottom: 100px"><h3>Thinkers Vs Feelers</h3></div>
      <div class="row justify-center">
        <div class="col-4">
          <div class="row justify-center">
            <img class="row tf-img" alt="thinking" src="../assets/thinker.png">
          </div>
          <div class="row justify-center" style="height: 75px">
            <h3>31%</h3>
          </div>
          <div class="row justify-center">
            <h5>Thinking (T)</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <img class="row tf-img" alt="feeling" style="height: 310px; margin-bottom: -25px; margin-top: 15px" src="../assets/feeling.png">
          </div>
          <div class="row justify-center" style="height: 75px;">
            <h3>69%</h3>
          </div>
          <div class="row justify-center">
            <h5>Feeling (F)</h5>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
  .think-feel {
    background-color: #2d92cc;
    color: white;
  }
  .tf-img {
    width: 310px;
    height: 300px;
    position: relative;
  }
</style>

<script>
export default {
  name: 'ThinkVsFeel.vue'
}
</script>
