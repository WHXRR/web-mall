import { debounce } from "common/utils.js";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() { 
        const refresh = debounce(this.$refs.scroll.refresh, 20);
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
    },
}