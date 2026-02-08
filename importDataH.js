// importDataH.js
import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore"

// 你的 Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyBEiIwD1C89EOH7c25sA0vwLDzFt8LCBMM",
  authDomain: "edwrd-portfolio.firebaseapp.com",
  projectId: "edwrd-portfolio",
  appId: "1:248788652461:web:308f83d45a74f3483d9124"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const coserHData = [
  { "id": 1, "rf": "柒柒&鴿子", "f": "小圓&美焰", "tv": "ins/tiktok" },
  { "id": 2, "rf": "腥味猫罐", "f": "迪賽爾", "tv": "tk:_Niku_" },
  { "id": 3, "rf": "未知", "f": "知更鳥", "tv": "ins/tiktok" },
  { "id": 4, "rf": "未知", "f": "知更鳥", "tv": "ins/tiktok" },
  { "id": 5, "rf": "腥味猫罐", "f": "迪賽爾", "tv": "tk:_Niku_" },
  { "id": 6, "rf": "春日狸狸貓", "f": "穹", "tv": "ins/tiktok" },
  { "id": 7, "rf": "原原禾", "f": "蕾姆", "tv": "ins/tiktok" },
  { "id": 8, "rf": "未知", "f": "玉玲瓏", "tv": "ins/tiktok" },
  { "id": 9, "rf": "未知", "f": "蕾姆", "tv": "ins/tiktok" },
  { "id": 10, "rf": "未知", "f": "寄葉", "tv": "ins/tiktok" },
  { "id": 11, "rf": "未知", "f": "未知", "tv": "ins/tiktok" },
  { "id": 12, "rf": "lyc", "f": "凌波麗", "tv": "ins/tiktok" },
  { "id": 13, "rf": "未知", "f": "未知", "tv": "ins/tiktok" },
  { "id": 14, "rf": "未知", "f": "初音", "tv": "ins/tiktok" },
  { "id": 15, "rf": "未知", "f": "知更鳥", "tv": "ins/tiktok" }
];

async function importDataH() {
  console.log("🚀 開始匯入橫向資料到 photoH 集合...");
  
  for (const item of coserHData) {
    const docId = String(item.id);
    try {
      await setDoc(doc(db, "photoH", docId), {
        rf: item.rf,
        f: item.f,
        tv: item.tv,
        imgId: Number(item.id), // 轉成數字，方便 orderBy 排序
      });
      console.log(`✅ 已匯入 ID ${docId}: ${item.f}`);
    } catch (error) {
      console.error(`❌ ID ${docId} 匯入失敗: `, error);
    }
  }
  
  console.log("\n🎉 全部 15 筆橫向資料匯入成功！");
  process.exit(0);
}

importDataH();