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
              <div v-bind:style="[character.reveal ? erectBar : '', {height: scales.graphicSize.gHeight + 'px'}]" style="position: absolute;"/>
              <q-img v-bind:style="[character.reveal ? erectIcon : '', {width: scales.graphicSize.gWidth + 'px'}]"
                     v-bind:alt="character.id"
                     v-bind:src="character.img"
                     no-default-spinner/>
            </div>
            <div class="col-2" v-bind:style="{height: scales.graphicSize.gHeight + 'px'}">
              <div ver>
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
            <q-img v-bind:style="{width: scales.graphicSize.gWidth + 'px'}"
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
  }
  h1 {
    font: 50px Sans-Serif;
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

  /*!* BAR CHART *!*/

  /*!* Last bottom should have a shadow *!*/
  /*#bars li div.bottom {*/
  /*    -moz-box-shadow: 0 10px 10px hsla(0,0%,0%,.2);*/
  /*    -webkit-box-shadow: 0 10px 30px hsla(0,0%,0%,.2);*/
  /*    box-shadow: 0 10px 30px hsla(0,0%,0%,.2);*/
  /*}*/
  /*!* Ellipse top *!*/
  /*#bars li div.top {*/
  /*    background-color:rgba(213,238,241,0.5);*/
  /*    position:relative; float:left; margin-left:10px; width:40px; height:100px;*/
  /*    -moz-border-radius: 40px/100px; -webkit-border-radius: 40px 100px; border-radius: 40px/100px;*/
  /*    -webkit-transition-property: margin-left;*/
  /*    -webkit-transition-duration: 500ms;*/
  /*}*/


  /*#bars li div.top img { margin-left:10px; margin-top:15px; }*/
  /*!* Bar bottom *!*/
  /*#bar li div.bottom { position:relative; margin:5px 0; width:50px;*/
  /*    height:100px; -moz-border-radius: 40px/100px; -webkit-border-radius: 40px 100px; border-radius: 40px/100px;*/
  /*    background:-moz-linear-gradient(-90deg, #97a7a9, #b8cbcd); background:-webkit-gradient(linear, 0 top, 0 bottom, from(#97a7a9), to(#b8cbcd));*/
  /*    -webkit-transition-property: width;*/
  /*    -webkit-transition-duration: 500ms;*/
  /*}*/
  /*#bar li div.bottom div.infobox { padding:40px 0 0 600px;*/
  /*    -webkit-transition-property: color;*/
  /*    -webkit-transition-duration: 500ms;*/
  /*}*/
  /*#bar li div.bottom div.infobox h3 { font-family:Georgia,serif,Times; }*/
  /*#bar li div.bottom div.infobox p {*/
  /*    font-family: "Lucida Grande", Arial, Helvetica, Sans-Serif;*/
  /*    opacity: 0;*/
  /*    -webkit-transition-property: opacity;*/
  /*    -webkit-transition-duration: 500ms;*/
  /*}*/
  /*!* General hover actions *!*/
  /*#bar li:hover div.bottom div.infobox {*/
  /*    color:#eee; text-shadow: 0px 5px 5px #111;*/
  /*}*/
  /*#bar li:hover div.bottom div.infobox p {*/
  /*    opacity:1;*/
  /*}*/
  /*!* Adventurer bar *!*/
  /*#adventurer div.top { z-index:99; }*/
  /*#adventurer div.bottom { z-index:98; height:150px; }*/
  /*#adventurer:hover div.bar { background-color:#1f81ac; height: 100px; width: adventurerBarWidth() + 'px'; }*/
  /*#adventurer:hover div.icon { margin-left:160px;}*/
  /*#adventurer:hover div.bottom { z-index:998; background-color:#1a6c90; width:200px;*/
  /*    background:-moz-linear-gradient(-90deg, #1a6c90, #14506b); background:-webkit-gradient(linear, 0 top, 0 bottom, from(#1a6c90), to(#14506b)); }*/
  /*!* Academy *!*/
  /*#academy { clear:both; margin-top:-70px; position:relative; z-index:-999; }*/
  /*#academy p { float:right; padding-top:247px; }*/
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
