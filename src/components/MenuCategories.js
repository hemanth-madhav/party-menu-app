// src/components/MenuCategories.js
import React from "react";
import HeroBanner from "./HeroBanner";

export default function MenuCategories({ categories, dishes, selectedItems, onSelect }) {
  return (
    <section className="screen categories-screen">
      <HeroBanner />
      <div className="screen-header">
        <h2 className="screen-title">Select a Category</h2>
        <p className="screen-subtitle">Choose any category below to start building your menu</p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => {
          const catDishes = dishes.filter((d) => d.categoryId === cat.id);
          const selectedInCat = catDishes.filter((d) => selectedItems[d.id]).length;

          return (
            <button
              key={cat.id}
              className="category-card"
              style={{ "--cat-color": cat.color, "--cat-bg": cat.bg }}
              onClick={() => onSelect(cat)}
            >
              <div className="cat-emoji">{cat.emoji}</div>
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-count">{catDishes.length} dishes</p>
              </div>
              {selectedInCat > 0 && (
                <div className="cat-selected-badge">{selectedInCat} selected</div>
              )}
              <div className="cat-arrow">→</div>
            </button>
          );
        })}
      </div>

      <div className="categories-footer">
        <p>🎊 Build your perfect party menu — mix and match from any category!</p>
      </div>
    </section>
  );
}
