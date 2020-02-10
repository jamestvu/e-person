<template>
  <q-page id="all-personalities">
    <div class="q-pa-md">
      <div style="width: 50vw; margin: auto;" ref="guildWindow">
        <div id="title" class="row">
          <div class="col">
            <h1>eWorld's Guild Members</h1>
          </div>
        </div>

        <div id="classes" class="row">
          <div class="col"/>
          <div class="col-2">
            <h2>Classes</h2>
          </div>
        </div>

        <!-- Prevent images from jumping up by containing them in a container equal to rendered size -->
        <div v-bind:style="{height: scales.graphicSize.gHeight  * 4 + 'px'}">
          <div class="row"
               v-for="character in activeFaction.faction" v-bind:key="character.id"
               v-on:mouseover="character.reveal = true, activeFaction.count = character.count"
               v-on:mouseleave="character.reveal = false">
            <div class="col">
              <div class="animate-bar" v-bind:style="[character.reveal ? erectBar : '', {height: scales.graphicSize.gHeight + 'px'}]" style="position: absolute;"/>
              <q-img v-bind:style="[character.reveal ? erectIcon : '', {width: scales.graphicSize.gWidth + 'px'}]"
                     v-bind:alt="character.id"
                     v-bind:src="character.img"
                     no-default-spinner/>
            </div>
            <div class="col-2" v-bind:style="{height: scales.graphicSize.gHeight + 'px'}">
              <div>
                <h3 v-bind:style="character.reveal ? colors.selectedObject : ''">{{ character.name }}</h3>
                <p v-show="character.reveal">{{ character.count }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Spacer div -->
        <div style="border-top: white; height: 10px;"></div>

        <div class="row">
          <div class="col-3"
               v-for="faction in factions" v-bind:key="faction.id"
               v-on:click="changeFaction(faction)"
               style="text-align: center;">
            <h3 v-bind:style="activeFaction.id === faction.id ? colors.selectedObject : ''">{{ faction.name }}</h3>
            <q-img v-bind:style="{width: scales.graphicSize.gWidth + 'px'}" style="cursor: pointer"
                   v-bind:alt="faction.id"
                   v-bind:src="faction.img"/>
          </div>
        </div>

        <div id="academy" class="row">
          <div class="col" style="text-align: center;">
            <q-img
              alt="academy"
              src="anim-chart/academy.svg"
              style="width: 300px;"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  #all-personalities {
    background: -moz-radial-gradient(#364D58, #000);
    background: -webkit-radial-gradient(#364D58, #000);
    background-color:#364D58;
    font-family: Candara;
  }
  h1 {
    font: 50px Candara;
    text-align: center;
    color: #eee;
    text-shadow: 0px 2px 6px #333;
  }
  h2 {
    font: 30px Sans-serif;
    color:#eee;
    text-shadow: 0px 2px 6px #333;
  }
  h3 {
    font: 20px Sans-serif;
    color:#9fa8da;
    text-shadow: 0px 2px 6px #333;
    margin: 0;
  }
  p {
    font: 20px Sans-serif;
    color:#eee;
    text-shadow: 0px 2px 6px #333;
    margin-top: 10px;
  }
  .animate-bar {
    width:40vw;
    -moz-border-radius: 40px/100px;
    -webkit-border-radius: 40px 100px;
    border-radius: 40px/100px;
    -webkit-transition-duration: 500ms;
  }
</style>

<script>
export default {
  name: 'AllPersonalities',
  data() {
    return {
      factions: {
        // Architect, Commander, Debater, Logician
        analysts: {
          color: '#E8D8E0',
          id: 'analysts',
          name: 'Analysts',
          img: 'anim-chart/analysts.svg',
          classes: {
            architect: {
              id: 'architect',
              name: 'Architect',
              reveal: false,
              img: 'anim-chart/intj-architect.svg',
              count: 0,
            },
            commander: {
              id: 'commander',
              name: 'Commander',
              reveal: false,
              img: 'anim-chart/entj-commander.svg',
              count: 2,
            },
            debater: {
              id: 'debater',
              name: 'Debater',
              reveal: false,
              img: 'anim-chart/entp-debater.svg',
              count: 2,
            },
            logician: {
              id: 'logician',
              name: 'Logician',
              reveal: false,
              img: 'anim-chart/intp-logician.svg',
              count: 4,
            },
          },
        },
        // Advocate, Campaigner, Mediator, Protagonist
        diplomats: {
          color: '#DBEEE6',
          id: 'diplomats',
          name: 'Diplomats',
          img: 'anim-chart/diplomats.svg',
          classes: {
            advocate: {
              id: 'advocate',
              name: 'Advocate',
              reveal: false,
              img: 'anim-chart/infj-advocate.svg',
              count: 8,
            },
            campaigner: {
              id: 'campaigner',
              name: 'Campaigner',
              reveal: false,
              img: 'anim-chart/enfp-campaigner.svg',
              count: 2,
            },
            mediator: {
              id: 'mediator',
              name: 'Mediator',
              reveal: false,
              img: 'anim-chart/infp-mediator.svg',
              count: 4,
            },
            protagonist: {
              id: 'protagonist',
              name: 'Protagonist',
              reveal: false,
              img: 'anim-chart/enfj-protagonist.svg',
              count: 4,
            },
          },
        },
        // Consul, Defender, Executive, Logistician
        sentinels: {
          color: '#CDE6E7',
          id: 'sentinels',
          name: 'Sentinels',
          img: 'anim-chart/sentinels.svg',
          classes: {
            consul: {
              id: 'consul',
              name: 'Consul',
              reveal: false,
              img: 'anim-chart/esfj-consul.svg',
              count: 1,
            },
            defender: {
              id: 'defender',
              name: 'Defender',
              reveal: false,
              img: 'anim-chart/isfj-defender.svg',
              count: 3,
            },
            executive: {
              id: 'executive',
              name: 'Executive',
              reveal: false,
              img: 'anim-chart/estj-executive.svg',
              count: 0,
            },
            logistician: {
              id: 'logistician',
              name: 'Logistician',
              reveal: false,
              img: 'anim-chart/istj-logistician.svg',
              count: 3,
            },
          },
        },
        // Adventurer, Entertainer, Entrepreneur, Virtuoso
        explorers: {
          color: '#F7E7CB',
          id: 'explorers',
          name: 'Explorers',
          img: 'anim-chart/explorers.svg',
          classes: {
            adventurer: {
              id: 'adventurer',
              name: 'Adventurer',
              reveal: false,
              img: 'anim-chart/isfp-adventurer.svg',
              count: 2,
            },
            entertainer: {
              id: 'entertainer',
              name: 'Entertainer',
              reveal: false,
              img: 'anim-chart/esfp-entertainer.svg',
              count: 0,
            },
            entrepreneur: {
              id: 'entrepreneur',
              name: 'Entrepreneur',
              reveal: false,
              img: 'anim-chart/estp-entrepreneur.svg',
              count: 0,
            },
            virtuoso: {
              id: 'virtuoso',
              name: 'Virtuoso',
              reveal: false,
              img: 'anim-chart/istp-virtuoso.svg',
              count: 0,
            },
          },
        },
      },
      activeFaction: {
        id: '',
        faction: { },
        color: '',
        count: '',
      },
      window: {
        width: 0,
      },
      colors: {
        selectedObject: {
          color: '#eee',
        },
      },
      scales: {
        barLength: 15,
        graphicSize: {
          gHeight: '75',
          gWidth: '75',
        },
      },
    }
  },
  mounted() {
    this.window.width = this.$refs.guildWindow.clientWidth;
    this.activeFaction.faction = this.factions.analysts.classes;
    this.activeFaction.color = this.factions.analysts.color;
    this.activeFaction.id = this.factions.analysts.id;
  },
  created() {
    window.addEventListener('resize', this.handleResize),
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = this.$refs.guildWindow.clientWidth;
    },
    changeFaction(faction) {
      this.activeFaction.faction = faction.classes;
      this.activeFaction.color = faction.color;
      this.activeFaction.id = faction.id;
    }
  },
  computed: {
    erectBar() {
      return {
        backgroundColor: this.activeFaction.color,
        width: this.window.width/this.scales.barLength * this.activeFaction.count + 'px',
      }
    },
    erectIcon() {
      return {
        marginLeft: this.window.width/this.scales.barLength * this.activeFaction.count + 'px',
      }
    },
  }
}
</script>
