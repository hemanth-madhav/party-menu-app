# 🎉 Party Menu Selection App — Complete Setup Guide

## Project Overview
A fully responsive ReactJS app for selecting dishes for a party.  
**Features:** Search, Category Filter, Veg/Non-veg Filter, Dish Selection, Ingredient Detail, Summary with totals.

---

## 📁 Final Project Structure
```
party-menu-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MenuCategories.js     ← Screen 1
│   │   ├── DishList.js           ← Screen 2
│   │   ├── SelectionSummary.js   ← Screen 3
│   │   └── IngredientDetail.js   ← Screen 4
│   ├── data/
│   │   └── menuData.js           ← All data (categories, dishes, ingredients)
│   ├── App.js                    ← Main logic + routing state
│   ├── App.css                   ← All styles (responsive)
│   └── index.js                  ← Entry point
├── package.json
└── README.md
```

---

## 🛠️ Step-by-Step Setup in VS Code

### STEP 1 — Install Prerequisites

**Install Node.js** (if not already installed):
1. Go to https://nodejs.org
2. Download **LTS version** (e.g. v20.x)
3. Run the installer → keep all defaults → click Next/Install

**Verify installation** — open any terminal and run:
```bash
node -v      # Should show v18.x or v20.x
npm -v       # Should show 9.x or 10.x
```

---

### STEP 2 — Open VS Code

1. Download VS Code from https://code.visualstudio.com if needed
2. Open VS Code
3. Install recommended extension: **ES7+ React/Redux/React-Native snippets** (optional but helpful)

---

### STEP 3 — Create the React App

Open VS Code's integrated terminal:
- Menu: **Terminal → New Terminal**  
- Or shortcut: `` Ctrl + ` ``

**Navigate to your desired folder:**
```bash
cd Desktop          # or wherever you want the project
```

**Create the React app:**
```bash
npx create-react-app party-menu-app
```
> This takes 1–3 minutes. It creates the project with all dependencies.

**Enter the project folder:**
```bash
cd party-menu-app
```

**Open in VS Code:**
```bash
code .
```

---

### STEP 4 — Replace / Create Files

You need to **replace** the default files with the provided code.

#### 4a. Delete default files not needed:
In the VS Code Explorer panel, delete:
- `src/App.test.js`
- `src/logo.svg`
- `src/reportWebVitals.js`
- `src/setupTests.js`

#### 4b. Update `public/index.html`
Replace the contents of `public/index.html` with the provided version (adds Google Fonts).

#### 4c. Replace `src/index.js`
Replace with the provided `index.js` (removes reportWebVitals import).

#### 4d. Replace `src/App.js`
Paste the full `App.js` code provided.

#### 4e. Replace `src/App.css`
Paste the full `App.css` code provided.

#### 4f. Create `src/data/menuData.js`
1. Right-click `src` folder → **New Folder** → name it `data`
2. Right-click `data` folder → **New File** → `menuData.js`
3. Paste the menuData.js content

#### 4g. Create `src/components/` folder and files
1. Right-click `src` folder → **New Folder** → name it `components`
2. Create these 4 files inside `components/`:
   - `MenuCategories.js`
   - `DishList.js`
   - `SelectionSummary.js`
   - `IngredientDetail.js`
3. Paste each file's code respectively

---

### STEP 5 — Start the Development Server

In the VS Code terminal (inside `party-menu-app` folder):
```bash
npm start
```

The browser will automatically open at:
```
http://localhost:3000
```

> ✅ You should see the Party Menu app with colorful category cards!

---

### STEP 6 — How to Use the App

| Screen | What it does |
|--------|--------------|
| **Home (Categories)** | Shows 6 food categories with dish count |
| **Dish List** | Shows dishes in selected category; filter by Veg/Non-Veg |
| **Global Search** | Search any dish across ALL categories from the top bar |
| **Ingredient Detail** | Click "Ingredients" on any dish to see full ingredient table |
| **Selection Summary** | Shows all selected dishes grouped by category with total price |

---

### STEP 7 — Build for Production (Optional)

When your project is ready to deploy:
```bash
npm run build
```
This creates an optimized `build/` folder ready to upload to any hosting (Netlify, Vercel, GitHub Pages, etc.).

---

## 🚨 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `'react-scripts' is not recognized` | Run `npm install` again |
| Port 3000 already in use | Press `Y` when asked to use another port |
| Module not found | Check file names match exactly (case-sensitive) |
| Blank screen | Open browser console (F12) and check for red errors |
| `npm start` not working | Make sure you are inside `party-menu-app` folder |

---

## 🎨 App Features Summary

### ✅ Search Functionality
- Global search bar in header searches ALL categories simultaneously
- Filters by dish name, description, and tags
- Real-time results shown as overlay
- Add/remove dishes directly from search results

### ✅ Menu Filtering (Mandatory)
- Filter by All / Veg / Non-Veg within each category
- Visual veg/non-veg dot indicators on every dish card

### ✅ Data Requirement (Mandatory)
- 6 categories: Starters, Main Course, Breads, Desserts, Beverages, Snacks
- 14 dishes total with real Indian party menu items
- Each dish has: name, price, rating, isVeg, description, tags, 5–6 ingredients

### ✅ 4 Screens
1. **Menu Categories** — Grid of 6 category cards
2. **Dish List** — Cards with add/remove qty controls
3. **Selection Summary** — Grouped by category, total price calculation
4. **Ingredient Detail** — Full ingredient table with qty and notes

### ✅ Responsive Design
- Works on mobile (320px+), tablet, and desktop
- Floating action bar for quick summary access
- Sticky header with search

---

## 📦 Dependencies Used
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```
> No extra libraries needed! Pure React + CSS.

---

*Built with ❤️ using React 18 + CSS Variables + Google Fonts (Playfair Display + DM Sans)*
