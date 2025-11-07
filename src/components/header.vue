<template>
  <header class="w3-container w3-xlarge lodan header-flex">
    <!-- 左側：標題 -->
    <h1 class="bold">『超級無敵剪刀』的主頁</h1>

    <!-- 右側：搜尋欄 + 使用者頭像（水平排列） -->
    <div class="header-right">

      <!-- 👤 使用者頭像與選單 -->
      <div class="dropdown padding-top">
        <a href="">
          <img class="user-img" height="auto" width="40" src="@/assets/img/main/user.png">
        </a>
        <div class="dropdown-contenth">
          <router-link to="/Human">喜歡的作品</router-link>
          <router-link to="/Upload">使用的器材</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import '@/assets/home.css';
</script>
