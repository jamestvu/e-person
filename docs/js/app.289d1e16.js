(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],m=0,p=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/e-person/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"05db":function(t,e,s){t.exports=s.p+"img/judge.d2dae620.png"},"0ad9":function(t,e,s){"use strict";var a=s("c645"),i=s.n(a);i.a},"308e":function(t,e,s){"use strict";var a=s("31c8"),i=s.n(a);i.a},"31c8":function(t,e,s){},"481e":function(t,e,s){t.exports=s.p+"img/prospect.b52f010a.png"},"4ce6":function(t,e,s){},"4d40":function(t,e,s){},"53f3":function(t,e,s){t.exports=s.p+"img/introverts.49d62880.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"lHh Lpr lFf"},on:{scroll:t.onScroll}},[s("q-header",{staticClass:"bg-grey-10",attrs:{elevated:""}},[s("q-toolbar",[s("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),s("q-toolbar-title",[t._v(" eWorldES Personalities ")]),s("div",[t._v("v0.70")])],1)],1),s("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[s("q-list",{attrs:{dense:""}},t._l(t.navigation,(function(e){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:"",active:t.activeNav===e.id},on:{click:function(s){return t.scrollTo(e.id)}}},[s("q-item-section",[t._v(t._s(e.label))])],1)})),1)],1),s("q-page-container",[s("router-view",{attrs:{name:"intro",id:"intro"}}),s("router-view",{attrs:{name:"allPersonalities",id:"all-personalities"}}),s("router-view",{attrs:{name:"extroVsIntro",id:"extro-intro"}}),s("router-view",{attrs:{name:"intuVsObs",id:"intu-obs"}}),s("router-view",{attrs:{name:"thinkVsFeel",id:"think-feel"}}),s("router-view",{attrs:{name:"judgeVsProspect",id:"judge-prospect"}}),s("router-view",{attrs:{name:"managers",id:"managers"}}),s("router-view",{attrs:{name:"evilTwin",id:"evil-twin"}}),s("q-page",{staticClass:"flex flex-center evil-twin"},[s("div",{staticClass:"justify-center"},[s("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1aMfhdIj2PNt_ylVwzmQfIMMpW3iJghO7WcD3oHW8PfI/edit?usp=sharing",target:"_blank"}},[t._v("What You Really Came Here For")])])])],1)],1)},n=[],r=[{id:"intro",label:"Home"},{id:"all-personalities",label:"All Personality Types"},{id:"extro-intro",label:"Extroverts Vs. Introverts"},{id:"intu-obs",label:"Intutioners Vs. Observanters"},{id:"think-feel",label:"Thinkers Vs. Feelers"},{id:"judge-prospect",label:"Judgers Vs. Prospectors"},{id:"managers",label:"Manager Personalities"},{id:"evil-twin",label:"Evil Twin Generator"}],o=s("0831"),c=o["a"].setScrollPosition,l={data:function(){return{navigation:r,activeNav:"intro"}},methods:{scrollTo:function(t){var e=this;this.activeNav=t;var s=document.getElementById(t);s&&setTimeout((function(){e.scrollPage(s)}),200)},scrollPage:function(t){var e=t.offsetTop-50;c(window,e,500)},onScroll:function(t){var e=t.position;!0!==this.scrollingPage&&this.updateActiveToc(e)},updateActiveToc:function(t){var e,s=r;for(var a in s){var i=s[a],n=document.getElementById(i.id);if(null!==n&&n.offsetTop>=t+50){void 0===e&&(e=i.id);break}}console.log("last",e),void 0!==e&&(this.activeNav=e)}},mounted:function(){var t=this;if(""!==location.hash){var e=location.hash.substring(1,location.hash.length);setTimeout((function(){t.scrollTo(e)}),200)}}},u={name:"LayoutDefault",mixins:[l],components:{},data:function(){return{leftDrawerOpen:!1}}},m=u,p=(s("5c0b"),s("2877")),g=s("fe09"),d=Object(p["a"])(m,i,n,!1,null,null,null),v=d.exports;d.options.components=Object.assign({QLayout:g["j"],QHeader:g["f"],QToolbar:g["o"],QBtn:g["a"],QToolbarTitle:g["p"],QDrawer:g["d"],QList:g["k"],QItem:g["h"],QItemSection:g["i"],QPageContainer:g["m"],QPage:g["l"]},d.options.components||{}),d.options.directives=Object.assign({Ripple:g["q"]},d.options.directives||{});s("c867"),s("5c7d"),s("7d6e"),s("e54f"),s("a4b7"),s("05bc"),s("0d0e"),s("573e"),s("35fc"),s("1194"),s("43b9");var h=s("b05d");a["a"].use(h["a"],{config:{},components:{},directives:{},plugins:{}});var f=s("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"absolute-center text-center text-white",staticStyle:{"margin-top":"-125px","z-index":"1"}},[a("div",{staticClass:"text-h2"},[t._v("eWorldES Personalities")]),a("p",{staticStyle:{"font-size":"20px"}},[t._v("eWorldES staffs have taken a personality test to see who they are.")]),a("q-btn",{attrs:{outline:"",color:"primary","text-color":"white",label:"See More"},on:{click:function(e){return t.scrollTo("all-personalities")}}})],1),a("img",{staticClass:"absolute-bottom",attrs:{src:s("83ac"),width:"100%"}})])},y=[],b={name:"Intro",mixins:[l]},w=b,S=(s("fa1c"),Object(p["a"])(w,x,y,!1,null,null,null)),T=S.exports;S.options.components=Object.assign({QPage:g["l"],QBtn:g["a"]},S.options.components||{});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticStyle:{"padding-bottom":"200px"},attrs:{id:"all-personalities"}},[s("div",{staticClass:"q-pa-md"},[s("div",{ref:"guildWindow",staticClass:"guild-window",staticStyle:{margin:"auto"}},[s("div",{staticClass:"row",attrs:{id:"title"}},[s("div",{staticClass:"col"},[s("h1",[t._v("eWorld's Guild Members")])])]),s("div",{staticClass:"row",attrs:{id:"classes"}},[s("div",{staticClass:"col-xs"}),s("div",{staticClass:"col-xs-2"},[s("h2",{staticClass:"shift-left"},[t._v("Classes")])])]),s("div",{staticClass:"chart-height"},t._l(t.activeFaction.faction,(function(e){return s("div",{key:e.id,staticClass:"row",on:{mouseover:function(s){e.reveal=!0,t.activeFaction.count=e.count},mouseleave:function(t){e.reveal=!1}}},[s("div",{staticClass:"col-xs"},[s("div",{staticClass:"animate-bar img-height",staticStyle:{position:"absolute"},style:e.reveal?t.erectBar:""}),s("q-img",{staticClass:"img-width",style:e.reveal?t.erectIcon:"",attrs:{alt:e.id,src:e.img,"no-default-spinner":""}})],1),s("div",{staticClass:"col-xs-2 img-height"},[s("div",{staticClass:"shift-left"},[s("h3",{style:e.reveal?t.colors.selectedObject:""},[t._v(t._s(e.name))]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.reveal,expression:"character.reveal"}]},[t._v(t._s(e.count))])])])])})),0),s("div",{staticStyle:{"border-top":"white",height:"10px"}}),s("div",{staticClass:"row"},t._l(t.factions,(function(e){return s("div",{key:e.id,staticClass:"col-xs-3",staticStyle:{"text-align":"center"},on:{click:function(s){return t.changeFaction(e)}}},[s("h3",{style:t.activeFaction.id===e.id?t.colors.selectedObject:""},[t._v(t._s(e.name))]),s("q-img",{staticClass:"img-width",staticStyle:{cursor:"pointer"},attrs:{alt:e.id,src:e.img}})],1)})),0),s("div",{staticClass:"row",attrs:{id:"academy"}},[s("div",{staticClass:"col-xs",staticStyle:{"text-align":"center"}},[s("q-img",{staticClass:"academy",attrs:{alt:"academy",src:"anim-chart/academy.svg"}})],1)])])]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[s("polygon",{attrs:{fill:"#2d92cc",points:"0,100 100,0 100,100"}})])])},k=[],P={name:"AllPersonalities",data:function(){return{factions:{analysts:{color:"#E8D8E0",id:"analysts",name:"Analysts",img:"anim-chart/analysts.svg",classes:{architect:{id:"architect",name:"Architect",reveal:!1,img:"anim-chart/intj-architect.svg",count:0},commander:{id:"commander",name:"Commander",reveal:!1,img:"anim-chart/entj-commander.svg",count:2},debater:{id:"debater",name:"Debater",reveal:!1,img:"anim-chart/entp-debater.svg",count:2},logician:{id:"logician",name:"Logician",reveal:!1,img:"anim-chart/intp-logician.svg",count:5}}},diplomats:{color:"#DBEEE6",id:"diplomats",name:"Diplomats",img:"anim-chart/diplomats.svg",classes:{advocate:{id:"advocate",name:"Advocate",reveal:!1,img:"anim-chart/infj-advocate.svg",count:8},campaigner:{id:"campaigner",name:"Campaigner",reveal:!1,img:"anim-chart/enfp-campaigner.svg",count:2},mediator:{id:"mediator",name:"Mediator",reveal:!1,img:"anim-chart/infp-mediator.svg",count:4},protagonist:{id:"protagonist",name:"Protagonist",reveal:!1,img:"anim-chart/enfj-protagonist.svg",count:5}}},sentinels:{color:"#CDE6E7",id:"sentinels",name:"Sentinels",img:"anim-chart/sentinels.svg",classes:{consul:{id:"consul",name:"Consul",reveal:!1,img:"anim-chart/esfj-consul.svg",count:2},defender:{id:"defender",name:"Defender",reveal:!1,img:"anim-chart/isfj-defender.svg",count:3},executive:{id:"executive",name:"Executive",reveal:!1,img:"anim-chart/estj-executive.svg",count:0},logistician:{id:"logistician",name:"Logistician",reveal:!1,img:"anim-chart/istj-logistician.svg",count:5}}},explorers:{color:"#F7E7CB",id:"explorers",name:"Explorers",img:"anim-chart/explorers.svg",classes:{adventurer:{id:"adventurer",name:"Adventurer",reveal:!1,img:"anim-chart/isfp-adventurer.svg",count:2},entertainer:{id:"entertainer",name:"Entertainer",reveal:!1,img:"anim-chart/esfp-entertainer.svg",count:0},entrepreneur:{id:"entrepreneur",name:"Entrepreneur",reveal:!1,img:"anim-chart/estp-entrepreneur.svg",count:0},virtuoso:{id:"virtuoso",name:"Virtuoso",reveal:!1,img:"anim-chart/istp-virtuoso.svg",count:0}}}},activeFaction:{id:"",faction:{},color:"",count:""},window:{width:0},colors:{selectedObject:{color:"#eee"}},barScale:15}},mounted:function(){this.window.width=this.$refs.guildWindow.clientWidth,this.activeFaction.faction=this.factions.analysts.classes,this.activeFaction.color=this.factions.analysts.color,this.activeFaction.id=this.factions.analysts.id},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.window.width=this.$refs.guildWindow.clientWidth},changeFaction:function(t){this.activeFaction.faction=t.classes,this.activeFaction.color=t.color,this.activeFaction.id=t.id}},computed:{erectBar:function(){return{backgroundColor:this.activeFaction.color,width:this.window.width/this.barScale*this.activeFaction.count+"px"}},erectIcon:function(){return{marginLeft:this.window.width/this.barScale*this.activeFaction.count+"px"}}}},J=P,E=(s("0ad9"),Object(p["a"])(J,C,k,!1,null,"60e57a5e",null)),A=E.exports;E.options.components=Object.assign({QPage:g["l"],QImg:g["g"]},E.options.components||{});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center extro-intro",staticStyle:{"padding-bottom":"100px"}},[a("div",{staticClass:"q-pa-md",staticStyle:{"margin-bottom":"100px"}},[a("h3",{staticClass:"text-center"},[t._v("Extroverts Vs. Introverts")]),a("div",{staticClass:"row wrap justify-center"},[a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"ei-img",attrs:{alt:"introverts",src:s("53f3"),width:"100%"}}),a("div",{staticClass:"text-h3"},[t._v("35%")]),a("div",{staticClass:"text-h5"},[t._v("Extroverts (E)")])]),a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"ei-img",attrs:{alt:"extroverts",src:s("59bd"),width:"100%"}}),a("div",{staticClass:"text-h3"},[t._v("65%")]),a("div",{staticClass:"text-h5"},[t._v("Introverts (I)")])])])]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("polygon",{attrs:{fill:"#E5E5E5",points:"0,100 100,0 100,100"}})])])},F=[],j={name:"ExtroVsIntro"},I=j,O=(s("d185"),Object(p["a"])(I,N,F,!1,null,null,null)),R=O.exports;O.options.components=Object.assign({QPage:g["l"]},O.options.components||{});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center intu-obs",staticStyle:{"padding-bottom":"100px"}},[a("div",{staticClass:"q-pa-md",staticStyle:{"margin-bottom":"100px"}},[a("h3",{staticClass:"text-center"},[t._v("Intuitioners Vs. Observatoriers")]),a("div",{staticClass:"row wrap justify-center"},[a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"io-img",attrs:{alt:"intuitive",src:s("aa99"),width:"100%"}}),a("div",{staticClass:"text-h3"},[t._v("70%")]),a("div",{staticClass:"text-h5"},[t._v("Intuitive (N)")])]),a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"row io-eye-img",attrs:{alt:"observant",src:s("672c"),width:"100%"}}),a("div",{staticClass:"text-h3"},[t._v("30%")]),a("div",{staticClass:"text-h5"},[t._v("Observant (S)")])])])]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("polygon",{attrs:{fill:"#2d92cc",points:"0,100 100,0 100,100"}})])])},D=[],M={name:"IntuVsObs.vue"},q=M,U=(s("308e"),Object(p["a"])(q,_,D,!1,null,null,null)),z=U.exports;U.options.components=Object.assign({QPage:g["l"]},U.options.components||{});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center think-feel",staticStyle:{"padding-bottom":"100px"}},[a("div",{staticClass:"q-pa-md",staticStyle:{"margin-bottom":"100px"}},[a("h3",{staticClass:"text-center"},[t._v("Thinkers Vs. Feelers")]),a("div",{staticClass:"row wrap justify-center"},[a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"tf-img",attrs:{alt:"thinking",src:s("6b96"),width:"100%"}}),a("div",{staticClass:"text-h3"},[t._v("31%")]),a("div",{staticClass:"text-h5"},[t._v("Thinking (T)")])]),a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"tf-img",attrs:{alt:"feeling",src:s("b903"),width:"100%"}}),a("div",{staticClass:"text-h3"},[t._v("69%")]),a("div",{staticClass:"text-h5"},[t._v("Feeling (F)")])])])]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("polygon",{attrs:{fill:"#e5e5e5",points:"0,100 100,0 100,100"}})])])},B=[],Q={name:"ThinkVsFeel.vue"},W=Q,L=(s("5bee"),Object(p["a"])(W,V,B,!1,null,null,null)),G=L.exports;L.options.components=Object.assign({QPage:g["l"]},L.options.components||{});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center judge-prosp",staticStyle:{"padding-bottom":"100px"}},[a("div",{staticClass:"q-pa-md",staticStyle:{"margin-bottom":"100px"}},[a("h3",{staticClass:"text-center"},[t._v("Judgers Vs. Prospectors")]),a("div",{staticClass:"row wrap justify-center"},[a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"jp-img",attrs:{alt:"judging",src:s("05db")}}),a("div",{staticClass:"text-h3"},[t._v("63%")]),a("div",{staticClass:"text-h5"},[t._v("Judging (J)")])]),a("div",{staticClass:"col-xs-6 text-center full-height"},[a("img",{staticClass:"jp-img",attrs:{alt:"prospecting",src:s("481e")}}),a("div",{staticClass:"text-h3"},[t._v("37%")]),a("div",{staticClass:"text-h5"},[t._v("Prospector (P)")])])])]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("polygon",{attrs:{fill:"#5F5980",points:"0,100 100,0 100,100"}})])])},Y=[],K={name:"JudgeVsProspect.vue"},Z=K,X=(s("ec76"),Object(p["a"])(Z,H,Y,!1,null,null,null)),$=X.exports;X.options.components=Object.assign({QPage:g["l"]},X.options.components||{});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md text-center text-white",staticStyle:{"background-color":"#5F5980","padding-top":"50px","padding-bottom":"250px"}},[a("div",{staticClass:"text-h3 q-mt-xl"},[t._v("Manager Personalities")]),a("div",{staticClass:"text-subtitle1"},[t._v("Click on any manager to find out what personality they are!")]),a("div",{staticClass:"row wrap",staticStyle:{"margin-top":"5em"}},[t._l(t.managers,(function(e,i){return[a("div",{key:i,staticClass:"col-md-2 col-xs-4 text-black q-mb-md"},[a("q-card",{staticClass:"full-height q-ma-xs"},[a("q-card-section",[a("div",{staticStyle:{margin:"0 auto"}},[e.imageToggle?t._e():a("img",{staticStyle:{width:"100%",height:"100%","border-radius":"50%",border:"1px solid grey",cursor:"pointer"},attrs:{src:s("fe23")},on:{click:function(t){e.imageToggle=!e.imageToggle}}}),e.imageToggle?t._e():a("div",{staticStyle:{height:"28px"}}),e.imageToggle?a("div",[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:e.image},on:{click:function(t){e.imageToggle=!e.imageToggle}}}),a("div",{staticClass:"text-subtitle1"},[t._v(t._s(e.trait))])]):t._e()])]),a("q-card-section",[a("div",{staticClass:"text-h5"},[t._v(t._s(e.name))]),a("div",{staticClass:"text-caption"},[t._v(t._s(e.nickname))])])],1)],1)]}))],2),a("br"),a("div",{staticClass:"text-center"},[t._v("DISCLAIMER: Only Tom submitted his results. (and Dean obviously)")]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("polygon",{attrs:{fill:"#E5E5E5",points:"0,100 100,0 100,100"}})])])},et=[],st={name:"Managers.vue",data:function(){return{managers:[{name:"Tom",nickname:"Big T",imageToggle:!1,trait:"Consul (ESFJ-A)",original:s("b174"),image:"https://static.neris-assets.com/images/personality-types/famous/sentinels_ESFJ_bill_clinton.svg?v=3"},{name:"Joel",nickname:"JoJo",imageToggle:!1,trait:"Protagonist (ENFJ-A)",original:s("7c6c"),image:"https://static.neris-assets.com/images/personality-types/famous/sentinels_ISFJ_captain_america.svg?v=3"},{name:"Rex",nickname:"Dino",imageToggle:!1,trait:"Logistician (ISTJ-A)",original:s("8b78"),image:"https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_neo_the_matrix.svg?v=3"},{name:"Steve",nickname:"Sakats",imageToggle:!1,trait:"Campaigner (ENFP-A)",original:s("af09"),image:"https://static.neris-assets.com/images/personality-types/famous/diplomats_ENFP_willy_wonka_charlie_and_the_chocolate_factory.svg?v=3"},{name:"Bhanu",nickname:"The Stache",imageToggle:!1,trait:"Entertainer (ESFP-A)",original:s("c16c"),image:"https://static.neris-assets.com/images/personality-types/famous/explorers_ESFP_steve_irwin.svg?v=3"},{name:"Dean",nickname:"Dean Da Destroyer",imageToggle:!1,trait:"Destroyer (DEAN-S)",original:s("6a50"),image:"https://static.neris-assets.com/images/personality-types/famous/analysts_INTP_bruce_banner.svg?v=3"}]}}},at=st,it=(s("9ad7"),Object(p["a"])(at,tt,et,!1,null,null,null)),nt=it.exports;it.options.components=Object.assign({QPage:g["l"],QCard:g["b"],QCardSection:g["c"]},it.options.components||{});var rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center evil-twin",staticStyle:{"padding-bottom":"100px"},attrs:{id:"evil-twin"}},[s("div",{staticClass:"col"},[s("div",{staticClass:"row justify-center",staticStyle:{"margin-bottom":"25px"},attrs:{align:"center"}},[s("h3",[t._v("Who is your Evil Twin?")])]),s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"row"},[s("q-select",{staticClass:"pers-dd",attrs:{outlined:"",options:t.persTypes,label:"Your Personality Type","option-value":"code","option-label":"class"},model:{value:t.persType,callback:function(e){t.persType=e},expression:"persType"}}),s("q-btn",{staticStyle:{"margin-left":"25px"},attrs:{round:"",color:"brown-5",icon:"directions",size:"lg",disabled:""==t.persType},on:{click:function(e){return t.computeTwin()}}})],1)]),s("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"25px"}},[""!=t.resultPic?s("img",{staticClass:"row",staticStyle:{height:"150px",width:"150px"},attrs:{alt:"persTypePic",src:t.resultPic}}):t._e()]),s("div",{staticClass:"row justify-center"},[s("h5",[t._v(t._s(t.twinResultText))])])]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[s("polygon",{attrs:{fill:"white",points:"0,100 100,0 100,100"}})])])},ot=[],ct=(s("c975"),s("9c40")),lt=s("ddd8"),ut={name:"EvilTwin.vue",component:{QSelect:lt["a"],QBtn:ct["a"]},data:function(){return{persTypes:[{code:"ENTJ",class:"ESTJ - Commander"},{code:"ENTP",class:"ENTP - Debater"},{code:"ENFJ",class:"ENFJ - Protagonist"},{code:"ENFP",class:"ENFP - Campaigner"},{code:"ESTJ",class:"ESTJ - Executive"},{code:"ESFJ",class:"ESFJ - Consul"},{code:"ESTP",class:"ESTP - Entrepreneur"},{code:"ESFP",class:"ESP - Entertainer"},{code:"INTJ",class:"INTJ - Architect"},{code:"INTP",class:"INTP - Logician"},{code:"INFJ",class:"INFJ - Advocate"},{code:"INFP",class:"INFP - Mediator"},{code:"ISTJ",class:"ISTJ - Logistician"},{code:"ISFJ",class:"ISFJ - Defender"},{code:"ISTP",class:"ISTP - Virtuoso"},{code:"ISFP",class:"ISFP - Adventurer"}],persType:"",twinResultText:"",resultPic:""}},computed:{},methods:{computeTwin:function(){switch(this.twinResultText="Your Evil Twin could possibly be...",this.persType.code){case"ENTJ":this.computeENTJ();break;case"ENTP":this.computeENTP();break;case"ENFJ":this.computeENFJ();break;case"ENFP":this.computeENFP();break;case"ESTJ":this.computeESTJ();break;case"ESTP":this.computeESTP();break;case"ESFJ":this.computeESFJ();break;case"ESFP":this.computeESFP();break;case"INTJ":this.computeINTJ();break;case"INTP":this.computeINTP();break;case"INFJ":this.computeINFJ();break;case"INFP":this.computeINFP();break;case"ISTJ":this.computeISTJ();break;case"ISTP":this.computeISTP();break;case"ISFJ":this.computeISFJ();break;case"ISFP":this.computeISFP();break;default:this.twinResultText+="Alan Sheen. I'm sorry."}-1!=this.twinResultText.indexOf("Shrek")&&(this.resultPic="https://purepng.com/public/uploads/medium/purepng.com-shrek-headshrekcomputer-animatedfantasy-filmfairy-talebook-17015286538907odjy.png")},computeENTJ:function(){var t=["Russel T","Staley C","Avril Lavigne","Michael Jackson","Britney Spears","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/isfp-adventurer-s1-v1-female.svg"},computeENTP:function(){var t=["Brian D","Trent P","Amanda W","Beyonce","Vin Diesel","Selena Gomez","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/isfj-defender-s1-v1-female.svg"},computeENFJ:function(){var t=["James V","Ashley F","Jennifer L","Clint Eastwood","Michael Jordan","Tom Cruise","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/istp-virtuoso-s1-v1-female.svg"},computeENFP:function(){var t=["James V","Ashley F","Jennifer L","Hermione Granger","George Washington","The Witcher","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/istj-logistician-s1-v1-female.svg"},computeESTJ:function(){var t=["Austyn B","Garry H","Tyler N","Kaitlyn T","William Shakespeare","Julia Roberts","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/infp-mediator-s1-v1-female.svg"},computeESTP:function(){var t=["Eric W","David D","Gene H","Kaelyn H","Bentley J","Mark M","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/infj-advocate-s1-v1-female.svg"},computeESFJ:function(){var t=["Crystal Y","Wayne N","Lee Ann C","Alvin P","Jason W","Bill Gates","Albert Einstein","Issac Newton","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/intp-logician-s1-v1-female.svg"},computeESFP:function(){var t=["Crystal Y","Wayne N","Lee Ann C","Alvin P","Jason W","Elon Musk","Michelle Obama","Arnold Schwarzenegger","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/intj-architect-s1-v1-female.svg"},computeINTJ:function(){var t=["Elton John","Adele","Jamie Foxx","Kaitlin W","Jason W","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/esfp-entertainer-s1-v1-female.svg"},computeINTP:function(){var t=["Taylor Swift","Bill Clinton","Steve Harvey","Kaitlin W","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/esfj-consul-s1-v1-female.svg"},computeINFJ:function(){var t=["Jack Nicholson","Madonna","Steve Harvey","Kaitlin W","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/estp-entrepreneur-s1-v1-female.svg"},computeINFP:function(){var t=["Judge Judy","Frank Sinatra","Dwight Schrute","Kaitlin W","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/estj-executive-s1-v1-female.svg"},computeISTJ:function(){var t=["Shae J","Brandon L","Robert Downey Jr.","Robin Williams","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/enfp-campaigner-s1-v1-female.svg"},computeISTP:function(){var t=["Brad M","Mark S","Shannon S","Dean R","Barack Obama","Oprah Winfrey","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/enfj-protagonist-s1-v1-female.svg"},computeISFJ:function(){var t=["Jianna O","Sunu","Mark Twain","Tom Hanks","Celine Dion","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/entp-debater-s1-v1-female.svg"},computeISFP:function(){var t=["Adi K","Albert R","Mark Twain","Steve Jerbs","Gordon Ramsay","Alan S","Shrek"];this.twinResultText+=t[this.getRandomNum(t.length)],this.resultPic="https://static.neris-assets.com/images/personality-types/avatars/faces/entj-commander-s1-v1-female.svg"},getRandomNum:function(t){return Math.floor(Math.random()*t)}}},mt=ut,pt=(s("c098"),Object(p["a"])(mt,rt,ot,!1,null,null,null)),gt=pt.exports;pt.options.components=Object.assign({QPage:g["l"],QSelect:g["n"],QBtn:g["a"],QField:g["e"]},pt.options.components||{}),a["a"].use(f["a"]);var dt=[{path:"/",components:{intro:T,allPersonalities:A,extroVsIntro:R,intuVsObs:z,thinkVsFeel:G,judgeVsProspect:$,managers:nt,evilTwin:gt},meta:{scrollToTop:!0}}],vt=function(t,e,s){return t.hash?{selector:t.hash}:s||{x:0,y:0}},ht=new f["a"]({mode:"history",base:"/e-person/",scrollBehavior:vt,routes:dt}),ft=ht;a["a"].config.productionTip=!1,new a["a"]({router:ft,render:function(t){return t(v)}}).$mount("#app")},"59bd":function(t,e,s){t.exports=s.p+"img/extrovert.af96dbc7.png"},"5bee":function(t,e,s){"use strict";var a=s("e553"),i=s.n(a);i.a},"5c0b":function(t,e,s){"use strict";var a=s("4d40"),i=s.n(a);i.a},"672c":function(t,e,s){t.exports=s.p+"img/observe.98016350.png"},"6a50":function(t,e,s){t.exports=s.p+"img/dean.84d62654.png"},"6b96":function(t,e,s){t.exports=s.p+"img/thinker.7faebc5c.png"},"7c6c":function(t,e,s){t.exports=s.p+"img/joel.6841c9ff.jpeg"},"83ac":function(t,e,s){t.exports=s.p+"img/all-personalities.7debdc96.png"},"8b78":function(t,e,s){t.exports=s.p+"img/rex.ae9a8982.png"},"9ad7":function(t,e,s){"use strict";var a=s("a31d"),i=s.n(a);i.a},a31d:function(t,e,s){},a5d7:function(t,e,s){},aa99:function(t,e,s){t.exports=s.p+"img/intuit.d063b60b.png"},af09:function(t,e,s){t.exports=s.p+"img/steve.22ac2ca9.png"},b174:function(t,e,s){t.exports=s.p+"img/tom.28c92fdb.png"},b903:function(t,e,s){t.exports=s.p+"img/feeling.9e15c47c.png"},c098:function(t,e,s){"use strict";var a=s("4ce6"),i=s.n(a);i.a},c16c:function(t,e,s){t.exports=s.p+"img/bhanu.75571bab.png"},c645:function(t,e,s){},c867:function(t,e,s){},d185:function(t,e,s){"use strict";var a=s("a5d7"),i=s.n(a);i.a},e553:function(t,e,s){},e6e1:function(t,e,s){},ec76:function(t,e,s){"use strict";var a=s("e6e1"),i=s.n(a);i.a},f0de:function(t,e,s){},fa1c:function(t,e,s){"use strict";var a=s("f0de"),i=s.n(a);i.a},fe23:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.289d1e16.js.map