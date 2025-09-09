<script setup>
import '@/assets/home.css'; 
</script>

<template>
  <nav class="w3-bar-block w3-white w3-top lodan" style="width:230px">
    <router-link to="/"><img class="logo logo-padding" src="@/assets/img/main/logo.png"></router-link>
    <div class="meun-padding w3-large">
      <div class="dropdown">
        <a class="w3-bar-item bold">Camera Type</a> 
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
        <a class="w3-bar-item bold">Lens</a> 
        <div class="dropdown-content w3-medium">
          <router-link to="/WideAngle">Wide angle lens(15-34mm)</router-link>
          <router-link to="/Standard">Standard lens(35-135mm)</router-link>
          <router-link to="/Telephoto">Telephoto lens(136-800mm)</router-link>
        </div>
      </div>
      <hr>
      <div class="dropdown">
        <a class="w3-bar-item bold">Light and Lamp</a> 
        <div class="dropdown-content w3-medium">
          <router-link to="/NatLight">Natural light</router-link>
          <router-link to="/PhotoLight">Photography light</router-link>
        </div>
      </div>
      <hr>
      <div class="dropdown">
        <a class="w3-bar-item bold">Portrait</a> 
        <div class="dropdown-content w3-medium">
          <router-link to="/HumanH">Amateur(Horizontal)</router-link>            
          <router-link to="/Human">Amateur(Vertical)</router-link>                        
          <router-link to="/CoserH">Coser(Horizontal)</router-link>
          <router-link to="/Coser">Coser(Vertical)</router-link>              
        </div>
      </div>
      <hr>
      <div class="dropdown">
        <a class="w3-bar-item bold">Environment</a> 
        <div class="dropdown-content w3-medium">
          <router-link to="/Landscape">Landscape</router-link>
          <router-link to="/Thing">Thing</router-link>       
        </div>
      </div>
      <hr>
    </div>
  </nav>
</template>
