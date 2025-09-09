<script setup>
import { ref, onMounted } from 'vue';
import '@/assets/home.css'; 

import img1 from '@/assets/img/main/page1-1.jpg';
import img2 from '@/assets/img/main/page1-2.jpg';
import img3 from '@/assets/img/main/page1-3.jpg';
import img4 from '@/assets/img/main/page1-4.jpg';
import img5 from '@/assets/img/main/page1-5.jpg';

const images = ref([img4, img2, img3, img1, img5]);
const currentImage = ref(0);

onMounted(() => {
  setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.value.length;
  }, 6000);
});
</script>

<template>
  <div class="slideshow-container">
    <div v-for="(image, index) in images" :key="index" class="mySlides" :class="{ fade: true, active: index === currentImage }">
      <img :src="image" style="width:100%">
    </div>
    <div class="dots">
      <span v-for="(image, index) in images" :key="index" class="dot" :class="{ active: index === currentImage }" @click="currentImage = index"></span>
    </div>
  </div>
</template>
