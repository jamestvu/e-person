import { navigation } from "../js/nav";
import { scroll } from 'quasar'
const { setScrollPosition } = scroll

export default {
    data () {
        return {
            navigation,
            activeNav: 'intro',
        }
    },
    methods: {
        scrollTo (id) {
            this.activeNav = id
            const el = document.getElementById(id)

            if (el) {
                setTimeout(() => {
                    this.scrollPage(el)
                }, 200)
            }
        },
        scrollPage (el) {
            // const target = getScrollTarget(el)
            const offset = el.offsetTop - 50
            // setScrollPosition(target, offset, 500)
            setScrollPosition(window, offset, 500)
        },
        onScroll ({ position }) {
            if (this.scrollingPage !== true) {
                this.updateActiveToc(position)
            }
        },
        updateActiveToc (position) {
            const toc = navigation
            let last

            for (const i in toc) {
                const section = toc[i]
                const item = document.getElementById(section.id)

                if (item === null) {
                    continue
                }

                if (item.offsetTop >= position + 50) {
                    if (last === void 0) {
                        last = section.id
                    }
                    break
                }
            }

            console.log('last', last)

            if (last !== void 0) {
                this.activeNav = last
            }
        }
    },
    mounted () {
        // code to handle anchor link on refresh/new page, etc
        if (location.hash !== '') {
            const id = location.hash.substring(1, location.hash.length)
            setTimeout(() => {
                this.scrollTo(id)
            }, 200)
        }
    }
}
