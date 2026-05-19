// src/components/IngredientDetail.js
import React from "react";

export default function IngredientDetail({
  dish, category, selectedQty, onToggle, onQtyChange, onBack,
}) {
  return (
    <section className="screen ingredient-screen">
      <div
        className="ingredient-hero"
        style={{ "--cat-color": category?.color, "--cat-bg": category?.bg }}
      >
        <div className="ing-hero-emoji">{dish.image}</div>
        <div className="ing-hero-info">
          <div className="ing-veg-row">
            <span className={`dot ${dish.isVeg ? "veg" : "nonveg"}`}></span>
            <span className="ing-veg-label">{dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}</span>
          </div>
          <h2 className="ing-dish-name">{dish.name}</h2>
          <p className="ing-dish-desc">{dish.description}</p>
          <div className="ing-meta-row">
            <span className="ing-price">₹{dish.price}</span>
            <span className="ing-rating">⭐ {dish.rating}</span>
            <span
              className="ing-cat-badge"
              style={{ background: category?.color + "22", color: category?.color }}
            >
              {category?.emoji} {category?.name}
            </span>
          </div>
          <div className="ing-tags">
            {dish.tags.map((t) => (
              <span key={t} className="dish-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="ingredient-body">
        <h3 className="ing-section-title">
          🧾 Ingredients <span className="ing-count">({dish.ingredients.length} items)</span>
        </h3>
        <div className="ingredients-table">
          <div className="ing-table-header">
            <span>Ingredient</span>
            <span>Quantity</span>
            <span>Note</span>
          </div>
          {dish.ingredients.map((ing, i) => (
            <div key={i} className="ing-table-row">
              <span className="ing-name">{ing.name}</span>
              <span className="ing-qty">{ing.qty}</span>
              <span className="ing-note">{ing.note || "—"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ingredient-footer">
        {selectedQty === 0 ? (
          <button className="add-btn full-width-btn" onClick={onToggle}>
            + Add to Party Menu
          </button>
        ) : (
          <div className="ing-footer-row">
            <div className="qty-ctrl large">
              <button onClick={() => onQtyChange(-1)}>−</button>
              <span>{selectedQty}</span>
              <button onClick={() => onQtyChange(1)}>+</button>
            </div>
            <span className="ing-footer-total">₹{dish.price * selectedQty} total</span>
            <button className="remove-btn lg" onClick={onToggle}>Remove</button>
          </div>
        )}
      </div>
    </section>
  );
}
