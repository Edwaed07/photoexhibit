<template>
  <div>
    <h3 class="bold lodan padding-lens">Wide angle lens (15-35mm)</h3>
    <ul class="container lodan">
      <li class="padding-lens" v-for="wa in wideA" :key="wa.id">
        <img :src="getImagePath(wa.id)" class="wa-image" @click="showOriginalSize(wa.id)" @error="handleImageError">
        <br>RF: {{ wa.rf }} &nbsp Aperture: {{ wa.f }} &nbsp Shutter: {{ wa.tv }}
        &nbsp &nbsp <img class="like" src="@/assets/img/main/like.png">
      </li>
    </ul>
    <div v-if="selectedImage" class="overlay" @click="closeImage">
      <img :src="getImagePath(selectedImage)" class="original-image">
    </div>
  </div>
</template>

<script>
import wideA from '@/data/wideA.json';

export default {
  data() {
    return {
      wideA: wideA,
      selectedImage: null
    };
  },
  methods: {
    getImagePath(id) {
      return new URL(`../assets/img/wideAngle/${id}.jpg`, import.meta.url).href; 
    },
    handleImageError(event) {
      event.target.src = '@/assets/img/main/logo.png';
    },
    showOriginalSize(id) {
      this.selectedImage = id;
    },
    closeImage() {
      this.selectedImage = null;
    }
  }
};
</script>

<style>

</style>
