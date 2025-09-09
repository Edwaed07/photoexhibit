<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const socialIcons = document.querySelectorAll('#Social img');

  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});
</script>
<template>
  <div class="w3-container w3-center">
    <img id="other" src="@/assets/img/main/diffcom.png">
  </div>
  <hr>

  <div class="flex">
    <div id="Social">
      <a href="https://www.facebook.com/groups/553511078046085/">
        <img src="@/assets/img/main/fb.png">
      </a>
      <a href="https://www.instagram.com/lightstalking/">
        <img src="@/assets/img/main/ins.png">
      </a>
      <a href="https://x.com/fotobeginner">
        <img src="@/assets/img/main/x.png">
      </a>
    </div>

    <footer class="flex-end footer-padding">
      <p>©2024 Yada Photography</p>
    </footer>
  </div>
</template>
