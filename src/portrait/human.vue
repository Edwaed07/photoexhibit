<template>
  <div>
    <h3 class="bold lodan padding-lens">Human</h3>
    <ul class="container lodan">
      <li class="padding-lens" v-for="wa in human" :key="wa.id">
        <img :src="getImagePath(wa.id)" class="wa-image" @click="showOriginalSize(wa.id)" @error="handleImageError">
        <br>cn: {{ wa.rf }} &nbsp Role: {{ wa.f }} &nbsp Media: {{ wa.tv }}
      </li>
    </ul>
    <div v-if="selectedImage" class="overlay" @click="closeImage">
      <img :src="getImagePath(selectedImage)" class="original-image">
    </div>
  </div>
</template>

<script>
import human from '@/data/portrait/human.json';

export default {
  data() {
    return {
      human: human,
      selectedImage: null
    };
  },
  methods: {
    getImagePath(id) {
      return new URL(`../assets/img/human/${id}.jpg`, import.meta.url).href; 
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

