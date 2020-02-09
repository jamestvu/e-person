<template>
  <q-page id="all-personalities" class="flex flex-center">
    <div id="content">
      <h2>eWorld's Guild Members</h2>
      <ul id="bars">
        <li id="adventurer">
          <div class="top">
            <q-img
              alt="adventurer"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
            />
          </div>
          <div class="bottom">
            <div class="infobox">
              <h3>Adventurers</h3>
              <p>80,1</p>
            </div>
          </div>
        </li>
      </ul>
      <div id="academy">
        <q-img
          alt="academy"
          src="anim-chart/academy.svg"
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  /* BASIC RESET */
  ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,all-personalities,adventurer,p,blockquote,fieldset,input {
    margin:0; padding:0;
  }
  /* HTML ELEMENTS */
  #all-personalities {
      background: -moz-radial-gradient(#364D58, #000);
      background: -webkit-radial-gradient(#364D58, #000);
      color:#555; background-color:#151f23;
      width: 800px; margin: 40px auto;
  }
  h2 a {
      display: block;
      text-decoration: none;
      margin: 0 0 30px 0;
      font: italic 40px Georgia, Times, Serif;
      text-align: center;
      color: #bfe1f1;
      text-shadow: 0px 2px 6px #333;
  }
  h2 a:hover {
      color: #90bcd0;
  }

  .break {
      clear: both;
  }

  /* CONTENT */
  #content h2 {
      font: bold 30px Helvetica, Arial, Sans-serif;
      color:#eee;
      text-shadow: 0px 2px 6px #333;
      margin-left:400px;
      padding-top:20px;
  }
  /* BAR CHART */
  #bars {
      list-style: none;
  }
  /* Last bottom should have a shadow */
  #bars li div.bottom {
      -moz-box-shadow: 0 10px 10px hsla(0,0%,0%,.2);
      -webkit-box-shadow: 0 10px 30px hsla(0,0%,0%,.2);
      box-shadow: 0 10px 30px hsla(0,0%,0%,.2);
  }
  /* Ellipse top */
  #bars li div.top {
      background-color:rgba(213,238,241,0.5);
      position:relative; float:left; margin-left:10px; width:40px; height:100px;
      -moz-border-radius: 40px/100px; -webkit-border-radius: 40px 100px; border-radius: 40px/100px;
      -webkit-transition-property: margin-left;
      -webkit-transition-duration: 500ms;
  }
  #bars li div.top img { margin-left:10px; margin-top:15px; }
  /* Bar bottom */
  #bar li div.bottom { position:relative; margin:5px 0; width:50px;
      height:100px; -moz-border-radius: 40px/100px; -webkit-border-radius: 40px 100px; border-radius: 40px/100px;
      background:-moz-linear-gradient(-90deg, #97a7a9, #b8cbcd); background:-webkit-gradient(linear, 0 top, 0 bottom, from(#97a7a9), to(#b8cbcd));
      -webkit-transition-property: width;
      -webkit-transition-duration: 500ms;
  }
  #bar li div.bottom div.infobox { padding:40px 0 0 600px;
      -webkit-transition-property: color;
      -webkit-transition-duration: 500ms;
  }
  #bar li div.bottom div.infobox h3 { font-family:Georgia,serif,Times; }
  #bar li div.bottom div.infobox p {
      font-family: "Lucida Grande", Arial, Helvetica, Sans-Serif;
      opacity: 0;
      -webkit-transition-property: opacity;
      -webkit-transition-duration: 500ms;
  }
  /* General hover actions */
  #bar li:hover div.bottom div.infobox {
      color:#eee; text-shadow: 0px 5px 5px #111;
  }
  #bar li:hover div.bottom div.infobox p {
      opacity:1;
  }
  /* Adventurer bar */
  #adventurer div.top { z-index:99; }
  #adventurer div.bottom { z-index:98; height:150px; }
  #adventurer:hover div.top { z-index:999; background-color:#1f81ac; margin-left:160px; }
  #adventurer:hover div.bottom { z-index:998; background-color:#1a6c90; width:200px;
      background:-moz-linear-gradient(-90deg, #1a6c90, #14506b); background:-webkit-gradient(linear, 0 top, 0 bottom, from(#1a6c90), to(#14506b)); }
  /* Academy */
  #academy { clear:both; margin-top:-70px; position:relative; z-index:-999; }
  #academy p { float:right; padding-top:247px; }
</style>

<script>
export default {
  name: 'AllPersonalities'
}
</script>
