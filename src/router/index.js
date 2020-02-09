import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'
import AllPersonalities from '../views/AllPersonalities'
import ExtroVsIntro from '../views/ExtroVsIntro'
import IntuVsObs from '../views/IntuVsObs'
import ThinkVsFeel from "../views/ThinkVsFeel";
import JudgeVsProspect from "../views/JudgeVsProspect";
import Managers from "../views/Managers";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      intro: Intro,
      allPersonalities: AllPersonalities,
      extroVsIntro: ExtroVsIntro,
      intuVsObs: IntuVsObs,
      thinkVsFeel: ThinkVsFeel,
      judgeVsProspect: JudgeVsProspect,
      managers: Managers
    },
    meta: { scrollToTop: true }
  }
]

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function (to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
  if (to.hash) {
    return { selector: to.hash }
  } else if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 }
  }
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes
})

export default router
