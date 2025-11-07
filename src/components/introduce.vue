<template>
  <div class="container">
    <div class="code-box">
      <div class="w3-center w3-xxxlarge fantasy">
        <p>網頁介紹</p>
      </div>
      <br>
      <div class="w3-large serif">
        本人是剪刀!叫我Edward也行,是個人像攝影愛好者。這是我分享照片的主頁,素人和Coserplay我都會拍,也會
        一些風景照片!不是拍的很好不過希望大家喜歡,有興趣可以找我合作呢~
      </div>
    </div>
    <div class="image-box">
      <img id="bgd" src="@/assets/img/main/background-m.jpg" alt="Background Image">
      <img id="m-1" src="@/assets/img/main/m-1.jpg" alt="Moving Image" ref="moveImage1">
      <img id="m-2" src="@/assets/img/main/m-2.jpg" alt="Moving Image" ref="moveImage2">
    </div>
  </div>
</template>

<script setup>
import '@/assets/home.css'; 
import { ref, onMounted } from 'vue';

const moveImage1 = ref(null);
const moveImage2 = ref(null);

onMounted(() => {
  const image1 = moveImage1.value;
  image1.style.position = 'absolute';
  image1.style.top = '10px';
  image1.style.width = '18%';
  image1.style.animation = 'move1 10s infinite';

  const image2 = moveImage2.value;
  image2.style.position = 'absolute';
  image2.style.bottom = '-55px';
  image2.style.right = '0px';
  image2.style.width = '30%';
  image2.style.animation = 'move2 18s infinite';
});
</script>
