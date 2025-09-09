<template>
    <!-- Page content -->

    <!-- Image gif -->
    <GifComponent /><br><br>

    <!-- Introduce -->
    <IntroduceComponent />
    
    <br><br><br><br><br><br>

    <!-- 3elements -->
    <ElementsComponent />

    <br><br>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import '@/assets/home.css';
import GifComponent from './gif.vue';
import IntroduceComponent from './introduce.vue';
import ElementsComponent from './elements.vue';
</script>
