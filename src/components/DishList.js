// src/components/DishList.js
import React from "react";

export default function DishList({
  category, dishes, allDishesInCategory, selectedItems,
  filter, onFilterChange, onToggle, onQtyChange,
  onViewIngredient, onViewSummary, totalSelected,
}) {
  const vegCount = allDishesInCategory.filter((d) => d.isVeg).length;
  const nonVegCount = allDishesInCategory.filter((d) => !d.isVeg).length;

  return (
    <section className="screen dishlist-screen">
      <div className="screen-header" style={{ "--cat-color": category?.color }}>
        <div className="cat-header-row">
          <span className="cat-header-emoji">{category?.emoji}</span>
          <div>
            <h2 className="screen-title">{category?.name}</h2>
            <p className="screen-subtitle">{allDishesInCategory.length} dishes available</p>
          </div>
        </div>

        {/* Filter pills */}
        <div className="filter-bar">
          <button
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
            onClick={() => onFilterChange("all")}
          >
            All ({allDishesInCategory.length})
          </button>
          <button
            className={`filter-pill veg-pill ${filter === "veg" ? "active" : ""}`}
            onClick={() => onFilterChange("veg")}
          >
            <span className="dot veg"></span> Veg ({vegCount})
          </button>
          {nonVegCount > 0 && (
            <button
              className={`filter-pill nonveg-pill ${filter === "nonveg" ? "active" : ""}`}
              onClick={() => onFilterChange("nonveg")}
            >
              <span className="dot nonveg"></span> Non-Veg ({nonVegCount})
            </button>
          )}
        </div>
      </div>

      {dishes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <p>No dishes match your filter.</p>
          <button className="reset-btn" onClick={() => onFilterChange("all")}>Show all</button>
        </div>
      ) : (
        <div className="dishes-grid">
          {dishes.map((dish) => {
            const qty = selectedItems[dish.id] || 0;
            const isSelected = qty > 0;

            return (
              <div
                key={dish.id}
                className={`dish-card ${isSelected ? "selected" : ""}`}
                style={{ "--cat-color": category?.color }}
              >
                <div className="dish-card-top">
                  <div className="dish-emoji-wrap">{dish.image}</div>
                  <div className="dish-info">
                    <div className="dish-name-row">
                      <span className={`dot ${dish.isVeg ? "veg" : "nonveg"}`}></span>
                      <h3 className="dish-name">{dish.name}</h3>
                    </div>
                    <p className="dish-desc">{dish.description}</p>
                    <div className="dish-tags">
                      {dish.tags.map((t) => (
                        <span key={t} className="dish-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="dish-card-bottom">
                  <div className="dish-meta">
                    <span className="dish-price">₹{dish.price}</span>
                    <span className="dish-rating">⭐ {dish.rating}</span>
                  </div>
                  <div className="dish-actions">
                    <button
                      className="ing-btn"
                      onClick={() => onViewIngredient(dish)}
                      title="View Ingredients"
                    >
                      🧾 Ingredients
                    </button>
                    {qty === 0 ? (
                      <button className="add-btn" onClick={() => onToggle(dish)}>
                        + Add
                      </button>
                    ) : (
                      <div className="qty-ctrl">
                        <button onClick={() => onQtyChange(dish.id, -1)}>−</button>
                        <span>{qty}</span>
                        <button onClick={() => onQtyChange(dish.id, 1)}>+</button>
                      </div>
                    )}
                  </div>
                </div>

                {isSelected && <div className="selected-ribbon">✓ Added</div>}
              </div>
            );
          })}
        </div>
      )}

      {totalSelected > 0 && (
        <div className="floating-bar">
          <span>{totalSelected} item{totalSelected > 1 ? "s" : ""} selected across all categories</span>
          <button className="view-summary-btn" onClick={onViewSummary}>
            View Summary →
          </button>
        </div>
      )}
    </section>
  );
}
