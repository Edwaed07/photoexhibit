<template>
  <div>
    <h3 class="bold lodan padding-lens">Cosplay (Horizontal)</h3>

    <!-- 載入中提示 -->
    <div v-if="isLoading" class="loading">載入中...</div>

    <!-- 資料展示 -->
    <ul v-else class="container lodan">
      <li class="padding-lens" v-for="wa in coserH" :key="wa.id">
        <!-- 圖片路徑指向 coserH 資料夾 -->
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
    const coserH = ref([])
    const selectedImage = ref(null)
    const isLoading = ref(true)

    // 從 Firestore photoH 集合抓取資料
    onMounted(async () => {
      try {
        const q = query(
          collection(db, 'photoH'), // 👈 注意這裡是用 photoH
          orderBy('imgId', 'desc')  // 最新 ID 在前
        )

        const querySnapshot = await getDocs(q)
        coserH.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        console.error("Firestore (Horizontal) 讀取錯誤：", error)
      } finally {
        isLoading.value = false
      }
    })

    // 橫向圖片的路徑
    const getImagePath = (imgId) => {
      if (!imgId) return new URL('@/assets/img/main/logo.png', import.meta.url).href
      // 這裡路徑改為 coserH
      return new URL(`../assets/img/coserH/${imgId}.jpg`, import.meta.url).href
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
      coserH,
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
/* 橫向佈局通常圖片會比較寬，你可以在這裡微調樣式 */
.wa-image {
  width: 100%;
  max-width: 450px;
  /* 橫向圖片可以設寬一點 */
  border-radius: 8px;
  cursor: pointer;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
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
  z-index: 1000;
}

.original-image {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
}
</style>