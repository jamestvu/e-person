<template>
  <q-page id="guild" class="flex flex-center">
    <div id="content">
      <h2>eWorld's Guild Members</h2>
      <ul id="bars">
        <li id="adventurer">
          <div class="top">
            <q-img
              alt="adventurer"
              src="https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=3"
              style="height: 10vw;"
            />
          </div>
          <div class="bottom">
            <div class="infobox">
              <h3>Adventurers</h3>
              <p>1</p>
            </div>
          </div>
        </li>
      </ul>
      <div id="academy">
        <q-img
          alt="academy"
          src="anim-chart/academy.svg"
          :ratio="4/3"
          style="width: 50vw; justify-content: center;"
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  /* BASIC RESET */
  /*ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,guild,p,blockquote,fieldset,input {*/
  /*  margin:0; padding:0;*/
  /*}*/
  /* HTML ELEMENTS */
  #guild {
      background: -moz-radial-gradient(#364D58, #000);
      background: -webkit-radial-gradient(#364D58, #000);
      color:#555;
      background-color:#151f23;
  }
  h1 {
    font: bold 50px Helvetica, Arial, Sans-serif;
    text-align: center;
    color: #eee;
    text-shadow: 0px 2px 6px #333;
  }
  h1 small {
      font-size: 20px;
      text-transform:uppercase;
      letter-spacing: 14px;
      display: block;
      color: #ccc;
      margin-top:10px;
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
</style>

<script>
export default {
  name: 'AllPersonalities'
}
</script>
