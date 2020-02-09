<template>
  <q-page id="all-personalities">
    <div class="q-pa-md">
      <div style="width: 50vw; margin: auto;" ref="window">
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

        <div class="row" v-on:mouseover="show.adventurers = true" v-on:mouseleave="show.adventurers = false">
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
              <h3 v-bind:style="show.adventurers ? selectedObject : ''">Adventurers</h3>
              <p v-show="show.adventurers">{{ counts.adventurers }}</p>
            </div>
          </div>
        </div>

        <div class="row" v-on:mouseover="show.advocates = true" v-on:mouseleave="show.advocates = false">
          <div class="col">
            <div v-bind:style="show.advocates ? erectBar : ''" style="position: absolute; height: 100px;"/>
            <q-img v-bind:style="show.advocates ? erectIcon : ''"
                   class="icon"
                   alt="adventurer"
                   src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
                   style="width: 100px;"
            />
          </div>
          <div class="col-2">
            <div>
              <h3 v-bind:style="show.advocates ? selectedObject : ''">Advocates</h3>
              <p v-show="show.advocates">{{ counts.advocates }}</p>
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
      selectedObject: {
        color: '#eee',
      },
      barScale: 15,
      counts: {
        adventurers: 2,
        advocates: 8,
        campaigners: 2,
        commanders: 2,
        consuls: 1,
        debaters: 2,
        defenders: 3,
        logicians: 4,
        logisticians: 2,
        mediators: 4,
        protagonists: 4,
      },
     show: {
       adventurers: false,
       advocates: false,
       campaigners: false,
       commanders: false,
       consuls: false,
       debaters: false,
       defenders: false,
       logicians: false,
       logisticians: false,
       mediators: false,
       protagonists: false,
     }
    }
  },
  computed: {
    erectBar() {
      if (this.show.adventurers) {
        return {
          backgroundColor: '#1f81ac',
          width: this.$refs.window.clientWidth/this.barScale * this.counts.adventurers + 'px',
        }
      }
      if (this.show.advocates) {
        return {
          backgroundColor: '#1f81ac',
          width: this.$refs.window.clientWidth/this.barScale * this.counts.advocates + 'px',
        }
      }
      return {}
    },
    erectIcon() {
      if (this.show.adventurers) {
        return {
          marginLeft: this.$refs.window.clientWidth/this.barScale * this.counts.adventurers + 'px',
        }
      }
      if (this.show.advocates) {
        return {
          marginLeft: this.$refs.window.clientWidth/this.barScale * this.counts.advocates + 'px'
        }
      }
      return {}
    },
  }
}
</script>
