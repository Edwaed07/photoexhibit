// importDataHumanH.js
import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEiIwD1C899EOH7c25sA0vwLDzFt8LCBMM", // 你的 Firebase apiKey
  authDomain: "edwrd-portfolio.firebaseapp.com",
  projectId: "edwrd-portfolio",
  appId: "1:248788652461:web:308f83d45a74f3483d9124"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 你提供的 HumanH JSON 資料
const humanHData = [
  { "id": 1, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 2, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 3, "rf": "永遠的白夜", "f": "制服?和鯊魚!", "tv": "ins/tiktok" },
  { "id": 4, "rf": "Anna", "f": "想念", "tv": "ins/tiktok" },
  { "id": 5, "rf": "Anna", "f": "想念", "tv": "ins/tiktok" },
  { "id": 6, "rf": "永遠的白夜", "f": "我是誰?", "tv": "ins/tiktok" },
  { "id": 7, "rf": "Jinx", "f": "圖片", "tv": "ins/tiktok" },
  { "id": 8, "rf": "嘉三金", "f": "午夜", "tv": "ins/tiktok" },
  { "id": 9, "rf": "嘉三金", "f": "午夜", "tv": "ins/tiktok" },
  { "id": 10, "rf": "xx", "f": "xxx", "tv": "ins/tiktok" }
];

async function importHumanHData() {
  console.log("🚀 開始匯入 Human (Horizontal) 資料到 humanH 集合...");
  for (const item of humanHData) {
    const docId = String(item.id);
    try {
      await setDoc(doc(db, "humanH", docId), { // 👈 這裡使用 'humanH' 集合
        rf: item.rf,
        f: item.f,
        tv: item.tv,
        imgId: Number(item.id), // 確保是數字類型，用於排序
        createdAt: serverTimestamp() // 添加伺服器時間戳
      });
      console.log(`✅ 已匯入 HumanH ID ${docId}: ${item.f}`);
    } catch (error) {
      console.error(`❌ HumanH ID ${docId} 匯入失敗: `, error);
    }
  }
  console.log("🎉 Human (Horizontal) 資料全部匯入完成！");
  process.exit(0);
}

importHumanHData();