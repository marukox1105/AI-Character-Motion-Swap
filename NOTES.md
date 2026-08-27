# 交付說明 — AI Character Motion Swap Prototype v1

日期：2026-08-27
來源 Figma：`ErcIJB2cqzyNECLBM3Dtk3`，node `1:8316`「Al Character Motion Swap」
依循規則：`system/YCO_product page_DESIGN-RULES.md`、`system/YCO_product page_SECTIONS.md`、`system/PROTOTYPE-CREATION-WORKFLOW.md`

## 這次涵蓋範圍

整頁：Header → Topbanner → 特色說明（intro list）→ How to Use（4步驟）→ 3 Ways to Use（Zig-zag圖文交錯 ×3）→ FAQ（9則手風琴）→ Footer。
三個斷點皆已實作：Desktop（>1024px）／Tablet（769–1024px）／Mobile（≤768px）。

## ✅ 2026-08-27 更新：已補上實際影片／圖片素材

你提供的影片/圖片已對應進頁面，目前狀態：

| 位置 | 素材檔案 | 狀態 |
| --- | --- | --- |
| Topbanner（Hero） | `topbanner-1.mp4`／`topbanner-2.mp4`／`top_banner_-kungfu_dance_final.webm` | ✅ 已放入，做成 **Option A／B／C 切換按鈕**（畫面右上角，僅供這次 review 比較用，**不是正式頁面元件**，定案後我會拿掉切換 UI、只保留選定的那一版） |
| From Photo to Motion 介紹區塊 | `00_Animate_a_Portrait_or_AI-Generated_Photo_.webm` | ✅ 已放入 |
| 3 Ways 第1組 Make Any Photo Move | `01_Make_Any_Photo_Move.webm` | ✅ 已放入 |
| 3 Ways 第2組 Give Any Character Real Motion | `02_Give_Any_Character_Real_Motion.webm` | ✅ 已放入 |
| 3 Ways 第3組 Swap Yourself Into Any Scene | `03_Swap_Yourself_Into_Any_Scene.webm` | ✅ 已放入 |
| How to Use Step 2 縮圖 | `step02.png` | ✅ 已放入 |
| How to Use Step 3 縮圖 | `step03.png` | ✅ 已放入 |
| How to Use Step 4 縮圖 | `step04.png` | ✅ 已放入 |
| How to Use Step 1 縮圖 | — | 仍是簡化版模型圖示（Kling/Runway），非最終視覺，你目前沒有提供對應素材 |

`top_banner_-kungfu_dance_final.webm` 原始尺寸是 1200×848（跟 01/02/03 一樣，不是滿版寬幅比例），已用 `object-fit:cover` 裁切成跟 Topbanner 滿版一致的顯示效果，畫面上不會露出比例落差，但因為是裁切而非重新出圖，構圖可能跟你原始設計的裁切點有落差，若要精確裁切位置麻煩再告知。

**Option A/B/C 定案後**，跟我說要選哪一版，我會把切換 UI 移除、把 HTML 改成單一固定版本。

## 本次依循的規則來源

- 按鈕高度 42px、字重 500、藥丸圓角：`DESIGN-RULES.md` 章節5.1（全站規則）
- 色彩／字體 tokens：`DESIGN-RULES.md` 章節2–4
- Header／Footer 基礎樣式沿用既有規範，但**這個 Figma 頁面本身設計的導覽列只有 Product／Use Case／API／Pricing 四個純連結＋Log In/Sign Up按鈕，沒有下拉 Mega Menu**，所以這次照這個頁面實際設計做（沒有比照 API_AI_Smile 的完整 Mega Menu），Mobile 版用簡化側邊選單（同樣4個連結）。如果之後這頁也要接上正式 Mega Menu，請告訴我再補上。
- FAQ 手風琴：單選互斥、展開列淺薄荷綠底＋箭頭朝上，沿用 `SECTIONS.md` 「Section 17」規則。
- Zig-zag 三組區塊：左右交錯、Mobile 改上下堆疊，沿用 `SECTIONS.md` 「Section 07」規則。
- Number 編號（01/02/03）漸層色沿用 `DESIGN-RULES.md` 章節5.4 記錄的 `#0EB5D9→#5DD73F`。

## 假設值 / 依 Tablet／Mobile 通用規則推導的部分

這個 Figma 檔案**只有 Desktop（1366px）版本**，沒有這頁專屬的 Tablet／Mobile 設計稿。以下 Tablet／Mobile 版面是依你 DESIGN-RULES.md／SECTIONS.md 裡其他頁面（API_AI_Bang、API_AI_Smile）已核對過的通用規則類比推導，不是照這頁的專屬設計稿：

- 版面容器邊距：Tablet 48px、Mobile 20px（沿用縮圖網格/Zig-zag章節慣例）
- Zig-zag 三組區塊在 Mobile 改上下堆疊、圖在文字上方
- Step 步驟在 Mobile 改單欄堆疊
- Header 在 <1024px 切換成漢堡選單

這些都是**假設值**，如果你有這頁實際的 Tablet/Mobile 設計稿，麻煩提供，我再依實際稿修正（目前的版本只是合理推導，不是精確還原）。

## 前端互動範圍（依 workflow 規則）

- CTA 按鈕（Animate Your Photo／Try It Now／Log In Sign Up）只做前端 hover 效果，未串接下一步功能。
- FAQ 手風琴、漢堡選單、語言切換按鈕已做前端展開/收合互動。

## 檔案結構

```
index.html
style.css
script.js
assets/YCO/icons/   （沿用 workspace 既有固定素材）
assets/YCO/logos/   （沿用 workspace 既有固定素材）
```
