<template>
  <el-container>
    <div class="w3-main">
      <el-header>
        <HeaderComponent />
      </el-header>
      <RouterView></RouterView>
      <br><br><br><br>

    </div>
          <el-footer>
        <FooterComponent />
      </el-footer>
    <el-aside class="menu-aside">
      <MenuComponent />
    </el-aside>
  </el-container>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import '@/assets/home.css';
import MenuComponent from './components/menu.vue';
import HeaderComponent from './components/header.vue';
import GifComponent from './components/gif.vue';
import IntroduceComponent from './components/introduce.vue';
import FooterComponent from './components/footer.vue';
import ElementsComponent from './components/elements.vue';
</script>


<style>
@import '@/assets/home.css';

@media (max-width: 1200px) {
  .menu-aside {
    display: none;
  }
  .w3-main {
    margin-left: 0;
  }
}
</style>
