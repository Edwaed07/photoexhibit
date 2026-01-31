<script setup>
import '@/assets/home.css'; 
</script>

<template>
  <nav class="w3-bar-block w3-white w3-top lodan" style="width:230px">
    <router-link to="/"><img class="logo logo-padding" src="@/assets/img/main/logo.png"></router-link>
    <div class="meun-padding w3-large">
      <div class="dropdown">
        <a class="w3-bar-item bold">品牌推薦</a>
        <div class="dropdown-content w3-medium">
          <router-link to="/Canon">Canon (佳能)</router-link>
          <router-link to="/Nikon">Nikon（尼康）</router-link>
          <router-link to="/Sony">Sony（索尼）</router-link>
          <router-link to="/Fujifilm">Fujifilm (富士)</router-link>
          <router-link to="/Olympus">Olympus（奧林巴斯）</router-link>
        </div>
      </div>
      <hr>
      <div class="dropdown">
        <a class="w3-bar-item bold">鏡頭</a>
        <div class="dropdown-content w3-medium">
          <router-link to="/WideAngle">廣角鏡(15-34mm)</router-link>
          <router-link to="/Standard">標準鏡(35-135mm)</router-link>
          <router-link to="/Telephoto">長距鏡(136-800mm)</router-link>
        </div>
      </div>
      <hr>
      <!--<div class="dropdown">
        <a class="w3-bar-item bold">光線</a>
        <div class="dropdown-content w3-medium">
          <router-link to="/NatLight">自然光</router-link>
          <router-link to="/PhotoLight">閃光燈</router-link>
        </div>
      </div>
      <hr>-->
      <div class="dropdown">
        <a class="w3-bar-item bold">人像攝影</a>
        <div class="dropdown-content w3-medium">
          <router-link to="/HumanH">素人(橫圖)</router-link>
          <router-link to="/Human">素人(直圖)</router-link>
          <router-link to="/CoserH">Coser(橫圖)</router-link>
          <router-link to="/Coser">Coser(直圖)</router-link>
        </div>
      </div>
      <hr>
      <div class="dropdown">
        <a class="w3-bar-item bold">景物</a>
        <div class="dropdown-content w3-medium">
          <router-link to="/Landscape">風景/建築</router-link>
          <router-link to="/Thing">動物</router-link>
        </div>
      </div>
      <hr>
    </div>
  </nav>
</template>
