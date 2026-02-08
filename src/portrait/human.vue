<template>
  <div>
    <h3 class="bold lodan padding-lens">Human</h3>

    <!-- 載入中提示 -->
    <div v-if="isLoading" class="loading">載入中...</div>

    <!-- 資料展示 -->
    <ul v-else class="container lodan">
      <li class="padding-lens" v-for="wa in human" :key="wa.id">
        <!-- 圖片使用本地路徑映射 imgId -->
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
    const human = ref([])
    const selectedImage = ref(null)
    const isLoading = ref(true)

    // 從 Firestore 抓取 Human 資料
    onMounted(async () => {
      try {
        const q = query(
          collection(db, 'human'),
          orderBy('imgId', 'desc') // 最新的圖排在前面
        )
        const querySnapshot = await getDocs(q)
        human.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        console.error("Firestore Human 讀取錯誤：", error)
      } finally {
        isLoading.value = false
      }
    })

    // 映射本地圖片路徑
    const getImagePath = (imgId) => {
      if (!imgId) return new URL('@/assets/img/main/logo.png', import.meta.url).href
      return new URL(`../assets/img/human/${imgId}.jpg`, import.meta.url).href
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
      human,
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
.wa-image {
  width: 100%;
  max-width: 300px;
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