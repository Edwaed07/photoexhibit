<template>
  <div>
    <h3 class="bold lodan padding-lens">Photography Light</h3>
    <ul class="container lodan">
      <li class="padding-lens" v-for="wa in lamp" :key="wa.id">
        <img :src="getImagePath(wa.id)" class="wa-image" @click="showOriginalSize(wa.id)" @error="handleImageError">
        <br>RF: {{ wa.rf }} &nbsp &nbsp Aperture: {{ wa.f }}&nbsp &nbspGN: {{wa.gn}} &nbsp &nbsp Shutter: {{ wa.tv }}
         <img class="like" src="@/assets/img/main/like.png">
      </li>
    </ul>
    <div v-if="selectedImage" class="overlay" @click="closeImage">
      <img :src="getImagePath(selectedImage)" class="original-image">
    </div>
  </div>
</template>

<script>
import lamp from '@/data/light/lamp.json';

export default {
  data() {
    return {
      lamp: lamp,
      selectedImage: null
    };
  },
  methods: {
    getImagePath(id) {
      return new URL(`../assets/img/lamp/${id}.jpg`, import.meta.url).href; 
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
