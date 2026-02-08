// importDataHuman.js
import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEiIwD1C89EOH7c25sA0vwLDzFt8LCBMM",
  authDomain: "edwrd-portfolio.firebaseapp.com",
  projectId: "edwrd-portfolio",
  appId: "1:248788652461:web:308f83d45a74f3483d9124"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 你提供的 Human JSON 資料
const humanData = [
  { "id": 1, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 2, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 3, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 4, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 5, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 6, "rf": "永遠的白夜", "f": "我是誰?", "tv": "ins/tiktok" },
  { "id": 7, "rf": "Anna", "f": "想念", "tv": "ins/tiktok" },
  { "id": 8, "rf": "嘉三金", "f": "想念", "tv": "ins/tiktok" },
  { "id": 9, "rf": "嘉三金", "f": "午夜", "tv": "ins/tiktok" }
];

async function importHumanData() {
  console.log("🚀 開始匯入 Human 資料到 human 集合...");
  for (const item of humanData) {
    const docId = String(item.id);
    try {
      await setDoc(doc(db, "human", docId), {
        rf: item.rf,
        f: item.f,
        tv: item.tv,
        imgId: Number(item.id), // 轉為數字類型，確保排序正確
        createdAt: serverTimestamp()
      });
      console.log(`✅ 已匯入 Human ID ${docId}`);
    } catch (error) {
      console.error(`❌ ID ${docId} 失敗: `, error);
    }
  }
  console.log("🎉 Human 資料全部匯入完成！");
  process.exit(0);
}

importHumanData();