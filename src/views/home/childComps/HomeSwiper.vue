<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"></a>
        <img :src="item.image" @load="imageLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  },
};
</script>

<style scoped>
</style>