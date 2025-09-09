<template>
  <div>
    <h3 class="bold lodan padding-lens">Coser(Vertical)</h3>
    <ul class="container lodan">
      <li class="padding-lens" v-for="wa in coser" :key="wa.id">
        <img :src="getImagePath(wa.id)" class="wa-image" @click="showOriginalSize(wa.id)" @error="handleImageError">
        <br>cn: {{ wa.rf }} &nbsp Role: {{ wa.f }} &nbsp Media: {{ wa.tv }}
         <!--&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
        &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  <img class="like" src="@/assets/img/main/like.png">-->

      </li>
    </ul>
    <div v-if="selectedImage" class="overlay" @click="closeImage">
      <img :src="getImagePath(selectedImage)" class="original-image">
    </div>
  </div>
</template>

<script>
import coser from '@/data/portrait/coser.json';

export default {
  data() {
    return {
      coser: coser,
      selectedImage: null
    };
  },
  methods: {
    getImagePath(id) {
      return new URL(`../assets/img/coser/${id}.jpg`, import.meta.url).href; 
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
