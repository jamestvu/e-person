<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          eWorldES Personalities
        </q-toolbar-title>

        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Looks Familiar Right</q-item-label>
        <q-item clickable tag="a" href="#asdf">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>All Personality Types</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#asdf">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Extroverts Vs. Introverts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#asdf">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Intutioners Vs. Observanters</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#asdf">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Thinkers Vs. Feelers</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="#asdf">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Judgers Vs. Prospectors</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="#asdf">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Most Common Personality Types</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="#asdf">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Most Unique Personality Types</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="#asdf">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Manager Personalities</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
