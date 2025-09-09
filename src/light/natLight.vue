<template>
  <div>
    <h3 class="bold lodan padding-lens">Natural Light</h3>
    <ul class="container lodan">
      <li class="padding-lens" v-for="wa in natLight" :key="wa.id">
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
import natLight from '@/data/light/natLight.json';

export default {
  data() {
    return {
      natLight: natLight,
      selectedImage: null
    };
  },
  methods: {
    getImagePath(id) {
      return new URL(`../assets/img/light/${id}.jpg`, import.meta.url).href; 
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
