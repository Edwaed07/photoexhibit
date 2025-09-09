<template>
  <header class="w3-container w3-xlarge lodan header-flex">
    <!-- 左側：標題 -->
    <h1 class="bold">Yada Photography Company Ltd.</h1>

    <!-- 右側：搜尋欄 + 使用者頭像（水平排列） -->
    <div class="header-right">
      <!-- 🔍 搜尋欄 -->
      <div class="search-wrapper">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>

      <!-- 👤 使用者頭像與選單 -->
      <div class="dropdown padding-top">
        <a href="">
          <img class="user-img" height="auto" width="40" src="@/assets/img/main/user.png">
        </a>
        <div class="dropdown-contenth">
          <router-link to="/Human">About me</router-link>
          <router-link to="/Animal">Collect</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import '@/assets/home.css';
</script>
