<template>
    <q-layout view="lHh Lpr lFf" @scroll="onScroll">
      <q-header elevated class="bg-grey-10">
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
          <q-list dense>
              <q-item
                      v-for="item in navigation"
                      :key="item.id"
                      clickable
                      v-ripple
                      dense
                      @click="scrollTo(item.id)"
                      :active="activeNav === item.id"
              >
                  <q-item-section>{{ item.label }}</q-item-section>
              </q-item>
          </q-list>
      </q-drawer>

      <q-page-container>
          <router-view name="intro" id="intro"></router-view>
          <router-view name="allPersonalities" id="all-personalities"></router-view>
          <router-view name="extroVsIntro" id="extro-intro"></router-view>
          <router-view name="intuVsObs" id="intu-obs"></router-view>
          <router-view name="thinkVsFeel" id="think-feel"></router-view>
          <router-view name="judgeVsProspect" id="judge-prospect"></router-view>
          <router-view name="managers" id="managers"></router-view>
          <router-view name="evilTwin" id="evil-twin"></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
  import {NavigationMixin} from "./mixins";

  export default {
    name: 'LayoutDefault',
    mixins: [ NavigationMixin ],
    components: {
    },
    data () {
      return {
        tab: 'mails',
        leftDrawerOpen: false
      }
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
