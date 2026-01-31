<template>
  <div>
    <h3 class="bold lodan padding-lens">Coser (Vertical)</h3>

    <!-- 載入中提示 -->
    <div v-if="isLoading" class="loading">
      <p>正在從雲端載入資料...</p>
    </div>

    <!-- 資料展示 -->
    <ul v-else class="container lodan">
      <li class="padding-lens" v-for="wa in coser" :key="wa.id">
        <!-- 圖片使用本地路徑，imgId 對應檔名 -->
        <img :src="getImagePath(wa.imgId)" class="wa-image" @click="showOriginalSize(wa.imgId)"
          @error="handleImageError" loading="lazy">
        <br>
        <div class="info">
          <span class="label">cn:</span> {{ wa.rf }} &nbsp;
          <span class="label">Role:</span> {{ wa.f }} &nbsp;
          <span class="label">Media:</span> {{ wa.tv }}
          <!-- 如果想顯示日期，可以取消下面註釋 -->
          <!-- <br><small v-if="wa.createdAt">發布時間: {{ formatDate(wa.createdAt) }}</small> -->
        </div>
      </li>
    </ul>

    <!-- Overlay 顯示原圖 (放大功能) -->
    <div v-if="selectedImage" class="overlay" @click="closeImage">
      <img :src="getImagePath(selectedImage)" class="original-image">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase.js'
// 引入 Firestore 排序相關功能
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

export default {
  setup() {
    const coser = ref([])
    const selectedImage = ref(null)
    const isLoading = ref(true)

    // 從 Firestore 抓取資料並排序
    onMounted(async () => {
      try {
        // 使用 orderBy('imgId', 'desc') 讓最新的 (ID 較大的) 排在前面
        // 注意：Firestore 裡 imgId 必須是數字類型才能正確執行數字排序
        const q = query(
          collection(db, 'photo'),
          orderBy('imgId', 'desc')
        )

        const querySnapshot = await getDocs(q)

        coser.value = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            ...data,
            // 如果你有 createdAt 欄位，可以在這裡處理日期格式
            // createdAt: data.createdAt?.toDate() // 將 Firestore Timestamp 轉為 JS Date
          }
        })
      } catch (error) {
        console.error("Firestore 讀取錯誤：", error)
      } finally {
        isLoading.value = false
      }
    })

    // 處理本地圖片路徑
    const getImagePath = (imgId) => {
      // 確保 imgId 存在，否則回傳 logo
      if (!imgId) return new URL('@/assets/img/main/logo.png', import.meta.url).href
      return new URL(`../assets/img/coser/${imgId}.jpg`, import.meta.url).href
    }

    const showOriginalSize = (imgId) => {
      selectedImage.value = imgId
    }

    const closeImage = () => {
      selectedImage.value = null
    }

    // 圖片載入失敗時顯示預設圖
    const handleImageError = (event) => {
      event.target.src = new URL('@/assets/img/main/logo.png', import.meta.url).href
    }

    // 格式化日期 (可選)
    const formatDate = (date) => {
      if (!date) return ''
      return new Intl.DateTimeFormat('zh-TW').format(date)
    }

    return {
      coser,
      selectedImage,
      isLoading,
      showOriginalSize,
      closeImage,
      handleImageError,
      getImagePath,
      formatDate
    }
  }
}
</script>

<style scoped>
.loading {
  text-align: center;
  color: #888;
  margin: 50px;
}

.wa-image {
  width: 100%;
  max-width: 300px;
  /* 根據你的需求調整 */
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.wa-image:hover {
  transform: scale(1.02);
}

.info {
  margin-top: 8px;
  font-size: 14px;
}

.label {
  font-weight: bold;
  color: #555;
}

/* 放大圖片的遮罩層 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.original-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.container {
  list-style: none;
  padding: 0;
}
</style>