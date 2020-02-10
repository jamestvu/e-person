<template>
  <q-page class="flex flex-center">
    <div class="absolute-center text-center text-white" style="margin-top: -10px; z-index: 1">
      <div class="text-h3">eWorld Personalities</div>
      <p>eWorld staffs have taken a personality test to see who they are.</p>
      <q-btn outline color="primary" text-color="white" label="See More" @click="scrollTo('all-personalities')"></q-btn>
    </div>
    <img src="../assets/all-personalities.png" width="100%" class="absolute-bottom">
  </q-page>
</template>

<style>
  body {
    background: url('../assets/starry-night.jpg') no-repeat;
    background-size: 100vw 100vh;
    font-family: 'Candara';
  }
</style>

<script>
import {NavigationMixin} from '../mixins';

export default {
  name: 'Intro',
  mixins: [ NavigationMixin ]
}
</script>
