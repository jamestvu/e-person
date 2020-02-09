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

        <div class="row"
             v-on:mouseover="show.architects = true, counts.members = counts.architects, colors.classColor = colors.analysts"
             v-on:mouseleave="show.architects = false">
          <div class="col">
            <div v-bind:style="show.architects ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.architects ? erectIcon : ''"
              class="icon"
              alt="architects"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.architects ? colors.selectedObject : ''">Architects</h3>
              <p v-show="show.architects">{{ counts.architects }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.commanders = true, counts.members = counts.commanders, colors.classColor = colors.analysts"
             v-on:mouseleave="show.commanders = false">
          <div class="col">
            <div v-bind:style="show.commanders ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.commanders ? erectIcon : ''"
              class="icon"
              alt="commanders"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.commanders ? colors.selectedObject : ''">Commanders</h3>
              <p v-show="show.commanders">{{ counts.commanders }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.debaters = true, counts.members = counts.debaters, colors.classColor = colors.analysts"
             v-on:mouseleave="show.debaters = false">
          <div class="col">
            <div v-bind:style="show.debaters ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.debaters ? erectIcon : ''"
              class="icon"
              alt="debaters"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.debaters ? colors.selectedObject : ''">Debaters</h3>
              <p v-show="show.debaters">{{ counts.debaters }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.logicians = true, counts.members = counts.logicians, colors.classColor = colors.analysts"
             v-on:mouseleave="show.logicians = false">
          <div class="col">
            <div v-bind:style="show.logicians ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.logicians ? erectIcon : ''"
              class="icon"
              alt="logicians"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.logicians ? colors.selectedObject : ''">Logicians</h3>
              <p v-show="show.logicians">{{ counts.logicians }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.advocates = true, counts.members = counts.advocates, colors.classColor = colors.diplomats"
             v-on:mouseleave="show.advocates = false">
          <div class="col">
            <div v-bind:style="show.advocates ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.advocates ? erectIcon : ''"
                   class="icon"
                   alt="advocates"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.advocates ? colors.selectedObject : ''">Advocates</h3>
              <p v-show="show.advocates">{{ counts.advocates }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.campaigners = true, counts.members = counts.campaigners, colors.classColor = colors.diplomats"
             v-on:mouseleave="show.campaigners = false">
          <div class="col">
            <div v-bind:style="show.campaigners ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.campaigners ? erectIcon : ''"
                   class="icon"
                   alt="campaigners"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.campaigners ? colors.selectedObject : ''">Campaigners</h3>
              <p v-show="show.campaigners">{{ counts.campaigners }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.mediators = true, counts.members = counts.mediators, colors.classColor = colors.diplomats"
             v-on:mouseleave="show.mediators = false">
          <div class="col">
            <div v-bind:style="show.mediators ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.mediators ? erectIcon : ''"
                   class="icon"
                   alt="mediators"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.mediators ? colors.selectedObject : ''">Mediators</h3>
              <p v-show="show.mediators">{{ counts.mediators }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.protagonists = true, counts.members = counts.protagonists, colors.classColor = colors.diplomats"
             v-on:mouseleave="show.protagonists = false">
          <div class="col">
            <div v-bind:style="show.protagonists ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.protagonists ? erectIcon : ''"
                   class="icon"
                   alt="protagonists"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.protagonists ? colors.selectedObject : ''">Protagonists</h3>
              <p v-show="show.protagonists">{{ counts.protagonists }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.consuls = true, counts.members = counts.consuls, colors.classColor = colors.sentinels"
             v-on:mouseleave="show.consuls = false">
          <div class="col">
            <div v-bind:style="show.consuls ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.consuls ? erectIcon : ''"
                   class="icon"
                   alt="consuls"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.consuls ? colors.selectedObject : ''">Consuls</h3>
              <p v-show="show.consuls">{{ counts.consuls }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.defenders = true, counts.members = counts.defenders, colors.classColor = colors.sentinels"
             v-on:mouseleave="show.defenders = false">
          <div class="col">
            <div v-bind:style="show.defenders ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.defenders ? erectIcon : ''"
                   class="icon"
                   alt="defenders"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.defenders ? colors.selectedObject : ''">Defenders</h3>
              <p v-show="show.defenders">{{ counts.defenders }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.executives = true, counts.members = counts.executives, colors.classColor = colors.sentinels"
             v-on:mouseleave="show.executives = false">
          <div class="col">
            <div v-bind:style="show.executives ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.executives ? erectIcon : ''"
                   class="icon"
                   alt="executives"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.executives ? colors.selectedObject : ''">Executives</h3>
              <p v-show="show.executives">{{ counts.executives }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.logisticians = true, counts.members = counts.logisticians, colors.classColor = colors.sentinels"
             v-on:mouseleave="show.logisticians = false">
          <div class="col">
            <div v-bind:style="show.logisticians ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.logisticians ? erectIcon : ''"
                   class="icon"
                   alt="logisticians"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.logisticians ? colors.selectedObject : ''">Logisticians</h3>
              <p v-show="show.logisticians">{{ counts.logisticians }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.adventurers = true, counts.members = counts.adventurers, colors.classColor = colors.explorers"
             v-on:mouseleave="show.adventurers = false">
          <div class="col">
            <div v-bind:style="show.adventurers ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.adventurers ? erectIcon : ''"
              class="icon"
              alt="adventurer"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.adventurers ? colors.selectedObject : ''">Adventurer</h3>
              <p v-show="show.adventurers">{{ counts.adventurers }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.entertainer = true, counts.members = counts.entertainer, colors.classColor = colors.explorers"
             v-on:mouseleave="show.entertainer = false">
          <div class="col">
            <div v-bind:style="show.entertainer ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.entertainer ? erectIcon : ''"
              class="icon"
              alt="entertainer"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.entertainer ? colors.selectedObject : ''">Entertainer</h3>
              <p v-show="show.entertainer">{{ counts.entertainer }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.entrepreneur = true, counts.members = counts.entrepreneur, colors.classColor = colors.explorers"
             v-on:mouseleave="show.entrepreneur = false">
          <div class="col">
            <div v-bind:style="show.entrepreneur ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.entrepreneur ? erectIcon : ''"
              class="icon"
              alt="entrepreneur"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.entrepreneur ? colors.selectedObject : ''">Entrepreneur</h3>
              <p v-show="show.entrepreneur">{{ counts.entrepreneur }}</p>
            </div>
          </div>
        </div>

        <div class="row"
             v-on:mouseover="show.virtuoso = true, counts.members = counts.virtuoso, colors.classColor = colors.explorers"
             v-on:mouseleave="show.virtuoso = false">
          <div class="col">
            <div v-bind:style="show.virtuoso ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.virtuoso ? erectIcon : ''"
              class="icon"
              alt="virtuoso"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.virtuoso ? colors.selectedObject : ''">Virtuoso</h3>
              <p v-show="show.virtuoso">{{ counts.virtuoso }}</p>
            </div>
          </div>
        </div>

        <div id="academy" class="row">
          <div class="col" style="text-align: center;">
            <q-img
              alt="academy"
              src="anim-chart/academy.svg"
              style="width: 400px;"
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
    font: bold 50px Helvetica, Arial, Sans-Serif;
    text-align: center;
    color: #eee;
    text-shadow: 0px 2px 6px #333;
  }
  h2 {
    font: bold 30px Helvetica, Arial, Sans-serif;
    color:#eee;
    text-shadow: 0px 2px 6px #333;
  }
  h3 {
    font: bold 20px Helvetica, Arial, Sans-serif;
    color:#9fa8da;
    text-shadow: 0px 2px 6px #333;
  }
  p {
    font: bold 14px Helvetica, Arial, Sans-serif;
    color:#eee;
    text-shadow: 0px 2px 6px #333;
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
      window: {
        width: 0,
      },
      colors: {
        selectedObject: {
          color: '#eee',
        },
        classColor: '',
        // Architect, Commander, Debater, Logician
        analysts: '#E8D8E0',
        // Advocate, Campaigner, Mediator, Protagonist
        diplomats: '#DBEEE6',
        // Consul, Defender, Executive, Logistician
        sentinels: '#CDE6E7',
        // Adventurer, Entertainer, Entrepreneur, Virtuoso
        explorers: '#F7E7CB',
      },
      barScale: 15,
      counts: {
        members: 0,
        architects: 0,
        commanders: 2,
        debaters: 2,
        logicians: 4,
        advocates: 8,
        campaigners: 2,
        mediators: 4,
        protagonists: 4,
        consuls: 1,
        defenders: 3,
        executives: 0,
        logisticians: 2,
        adventurers: 2,
        entertainer: 0,
        entrepreneur: 0,
        virtuoso: 0,
      },
      show: {
        architects: false,
        commanders: false,
        debaters: false,
        logicians: false,
        advocates: false,
        campaigners: false,
        mediators: false,
        protagonists: false,
        consuls: false,
        defenders: false,
        executives: false,
        logisticians: false,
        adventurers: false,
        entertainer: false,
        entrepreneur: false,
        virtuoso: false,
     }
    }
  },
  mounted() {
    this.window.width = this.$refs.guildWindow.clientWidth;
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
    }
  },
  computed: {
    erectBar() {
      return {
        backgroundColor: this.colors.classColor,
        width: this.window.width/this.barScale * this.counts.members + 'px',
      }
    },
    erectIcon() {
      return {
        marginLeft: this.window.width/this.barScale * this.counts.members + 'px',
      }
    },
  }
}
</script>
