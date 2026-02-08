<template>
  <div>
    <h3 class="bold lodan padding-lens">Human (Horizontal)</h3>

    <!-- 載入中提示 -->
    <div v-if="isLoading" class="loading">載入中...</div>

    <!-- 資料展示 -->
    <ul v-else class="container lodan">
      <li class="padding-lens" v-for="wa in humanH" :key="wa.id">
        <!-- 圖片路徑指向 humanH 資料夾 -->
        <img :src="getImagePath(wa.imgId)" class="wa-image" @click="showOriginalSize(wa.imgId)"
          @error="handleImageError" loading="lazy">
        <br>
        cn: {{ wa.rf }} &nbsp; Role: {{ wa.f }} &nbsp; Media: {{ wa.tv }}
      </li>
    </ul>

    <!-- Overlay 顯示原圖 -->
    <div v-if="selectedImage" class="overlay" @click="closeImage">
      <img :src="getImagePath(selectedImage)" class="original-image">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase.js'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

export default {
  setup() {
    const humanH = ref([]) // 儲存 HumanH 資料
    const selectedImage = ref(null)
    const isLoading = ref(true)

    // 從 Firestore 'humanH' 集合抓取資料
    onMounted(async () => {
      try {
        const q = query(
          collection(db, 'humanH'), // 👈 這裡使用 'humanH' 集合
          orderBy('imgId', 'desc')  // 最新的圖 ID 在前
        )

        const querySnapshot = await getDocs(q)
        humanH.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        console.error("Firestore Human (Horizontal) 讀取錯誤：", error)
      } finally {
        isLoading.value = false
      }
    })

    // 指定 HumanH 圖片資料夾的路徑
    const getImagePath = (imgId) => {
      if (!imgId) return new URL('@/assets/img/main/logo.png', import.meta.url).href
      return new URL(`../assets/img/humanH/${imgId}.jpg`, import.meta.url).href // 👈 路徑指向 humanH
    }

    const showOriginalSize = (imgId) => {
      selectedImage.value = imgId
    }

    const closeImage = () => {
      selectedImage.value = null
    }

    const handleImageError = (event) => {
      event.target.src = new URL('@/assets/img/main/logo.png', import.meta.url).href
    }

    return {
      humanH, // 記得返回 humanH
      selectedImage,
      isLoading,
      showOriginalSize,
      closeImage,
      handleImageError,
      getImagePath
    }
  }
}
</script>

<style scoped>
/* 請根據你的需求調整樣式 */
.wa-image {
  width: 100%;
  max-width: 500px;
  /* 橫向圖片通常可以設寬一點 */
  border-radius: 8px;
  cursor: pointer;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #888;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.original-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.container {
  list-style: none;
  padding: 0;
}
</style>