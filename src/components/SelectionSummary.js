// src/components/SelectionSummary.js
import React from "react";

export default function SelectionSummary({
  selectedItems, dishes, categories,
  onQtyChange, onRemove, onViewIngredient, onBack, onClearAll,
}) {
  const selectedDishes = Object.entries(selectedItems).map(([id, qty]) => ({
    dish: dishes.find((d) => d.id === Number(id)),
    qty,
  })).filter((x) => x.dish);

  const total = selectedDishes.reduce((sum, { dish, qty }) => sum + dish.price * qty, 0);

  // Group by category
  const grouped = categories.map((cat) => ({
    cat,
    items: selectedDishes.filter(({ dish }) => dish.categoryId === cat.id),
  })).filter((g) => g.items.length > 0);

  if (selectedDishes.length === 0) {
    return (
      <section className="screen summary-screen">
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h3>Your selection is empty</h3>
          <p>Go back and add some delicious dishes!</p>
          <button className="reset-btn" onClick={onBack}>Browse Menu</button>
        </div>
      </section>
    );
  }

  return (
    <section className="screen summary-screen">
      <div className="screen-header">
        <h2 className="screen-title">🎉 Your Party Menu</h2>
        <p className="screen-subtitle">
          {selectedDishes.length} dishes selected for your celebration
        </p>
        <button className="clear-all-btn" onClick={onClearAll}>Clear All</button>
      </div>

      <div className="summary-body">
        {grouped.map(({ cat, items }) => (
          <div key={cat.id} className="summary-group">
            <h3 className="summary-group-title" style={{ color: cat.color }}>
              {cat.emoji} {cat.name}
            </h3>
            {items.map(({ dish, qty }) => (
              <div key={dish.id} className="summary-row">
                <div className="summary-dish-info">
                  <span className="summary-emoji">{dish.image}</span>
                  <div>
                    <div className="summary-dish-name">
                      <span className={`dot ${dish.isVeg ? "veg" : "nonveg"}`}></span>
                      {dish.name}
                    </div>
                    <div className="summary-dish-price">₹{dish.price} each</div>
                  </div>
                </div>
                <div className="summary-right">
                  <div className="qty-ctrl">
                    <button onClick={() => onQtyChange(dish.id, -1)}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => onQtyChange(dish.id, 1)}>+</button>
                  </div>
                  <div className="summary-line-total">₹{dish.price * qty}</div>
                  <button
                    className="ing-btn-sm"
                    onClick={() => onViewIngredient(dish)}
                    title="View Ingredients"
                  >🧾</button>
                  <button className="remove-btn" onClick={() => onRemove(dish.id)}>✕</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="summary-footer">
        <div className="total-row">
          <span>Total Estimate</span>
          <span className="total-price">₹{total.toLocaleString()}</span>
        </div>
        <p className="total-note">* Prices are per serving. Final amount depends on quantity ordered.</p>
        <button className="confirm-btn">
          🎊 Confirm Party Menu
        </button>
      </div>
    </section>
  );
}
