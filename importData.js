// importData.js
import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"

// 你的 Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyBEiIwD1C89EOH7c25sA0vwLDzFt8LCBMM",
  authDomain: "edwrd-portfolio.firebaseapp.com",
  projectId: "edwrd-portfolio",
  appId: "1:248788652461:web:308f83d45a74f3483d9124"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// 你的 30 筆資料
const coserData = [
  { "id": 1, "rf": "瑤兔嘰", "f": "火花", "tv": "tk:9167953" },
  { "id": 2, "rf": "瑤兔嘰", "f": "火花", "tv": "tk:9167953" },
  { "id": 3, "rf": "菌烨TAKO", "f": "簡。杜", "tv": "ins:takomayuyi" },
  { "id": 4, "rf": "腥味猫罐", "f": "迪賽爾", "tv": "tk:Niku" },
  { "id": 5, "rf": "腥味猫罐", "f": "迪賽爾.0", "tv": "tk:Niku" },
  { "id": 6, "rf": "腥味猫罐", "f": "迪賽爾", "tv": "tk:Niku" },
  { "id": 7, "rf": "未知", "f": "尼恩", "tv": "ins/tiktok" },
  { "id": 8, "rf": "走路搖zly", "f": "坎特蕾拉", "tv": "tk:zouluyao" },
  { "id": 9, "rf": "兔子兔子兔w", "f": "羽瀬川小鳩", "tv": "ins/tiktok" },
  { "id": 10, "rf": "未知", "f": "約瑟夫", "tv": "ins/tiktok" },
  { "id": 11, "rf": "川江茉莉", "f": "女僕", "tv": "rn:Cjml_00700" },
  { "id": 12, "rf": "未知", "f": "小女孩", "tv": "ins/tiktok" },
  { "id": 13, "rf": "未知", "f": "法普塔", "tv": "ins/tiktok" },
  { "id": 14, "rf": "16mm", "f": "小櫻", "tv": "ins/tiktok" },
  { "id": 15, "rf": "鴿子", "f": "小櫻", "tv": "ins/tiktok" },
  { "id": 16, "rf": "柒柒", "f": "知世", "tv": "ins/tiktok" },
  { "id": 17, "rf": "鴿子&柒柒", "f": "小圓&美焰", "tv": "ins/tiktok" },
  { "id": 18, "rf": "未知", "f": "蕾姆", "tv": "ins/tiktok" },
  { "id": 19, "rf": "未知", "f": "玉玲瓏", "tv": "ins/tiktok" },
  { "id": 20, "rf": "未知", "f": "日向雛田", "tv": "ins/tiktok" },
  { "id": 21, "rf": "超羅", "f": "2.8", "tv": "ins/tiktok" },
  { "id": 22, "rf": "未知", "f": "酒吞童子", "tv": "ins/tiktok" },
  { "id": 23, "rf": "18mm", "f": "Lolita", "tv": "ins/tiktok" },
  { "id": 24, "rf": "未知", "f": "卡提希婭", "tv": "ins/tiktok" },
  { "id": 25, "rf": "未知", "f": "初音", "tv": "ins/tiktok" },
  { "id": 26, "rf": "未知", "f": "初音", "tv": "ins/tiktok" },
  { "id": 27, "rf": "38mm", "f": "5.0", "tv": "ins/tiktok" },
  { "id": 28, "rf": "55mm", "f": "2.8", "tv": "ins/tiktok" },
  { "id": 29, "rf": "30mm", "f": "3.5", "tv": "ins/tiktok" },
  { "id": 30, "rf": "18mm", "f": "2.0", "tv": "ins/tiktok" }
]

// 批次匯入函數
async function importData() {
  console.log("開始匯入資料...")
  
  for (const item of coserData) {
    const docId = String(item.id)
    
    try {
// importData.js 裡面的循環
await setDoc(doc(db, "photo", docId), {
  rf: item.rf,
  f: item.f,
  tv: item.tv,
  imgId: Number(item.id)  // 👈 這裡改成 Number，不要用 String
})
      console.log(`✓ ID ${docId} 匯入成功`)
    } catch (err) {
      console.error(`✗ ID ${docId} 失敗:`, err)
    }
  }
  
  console.log("🎉 全部完成！")
  process.exit(0)
}

importData()