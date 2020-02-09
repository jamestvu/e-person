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
        <q-item clickable tag="a" href="#hw">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>All Personality Types</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#extro-intro">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Extroverts Vs. Introverts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#intu-obs">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Intutioners Vs. Observanters</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#think-feel">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Thinkers Vs. Feelers</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#judge-prospect">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Judgers Vs. Prospectors</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#asdf">
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
        <q-item clickable tag="a"  href="#hw4">
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
      <Intro id="hw" />
      <AllPersonalities id="hw2" />
      <ExtroVsIntro id="extro-intro" />
      <IntuVsObs id="intu-obs" />
      <ThinkVsFeel id="think-feel" />
      <JudgeVsProspect id="judge-prospect" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Intro from './components/Intro.vue'
import AllPersonalities from './components/AllPersonalities.vue'
import ExtroVsIntro from './components/ExtroVsIntro.vue'
import IntuVsObs from './components/IntuVsObs.vue'
import ThinkVsFeel from './components/ThinkVsFeel.vue'
import JudgeVsProspect from './components/JudgeVsProspect.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Intro, AllPersonalities, ExtroVsIntro, IntuVsObs, ThinkVsFeel, JudgeVsProspect
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
