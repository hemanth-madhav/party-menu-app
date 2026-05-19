// src/App.js
import React, { useState, useMemo } from "react";
import { categories, dishes } from "./data/menuData";
import MenuCategories from "./components/MenuCategories";
import DishList from "./components/DishList";
import SelectionSummary from "./components/SelectionSummary";
import IngredientDetail from "./components/IngredientDetail";
import "./App.css";

// SCREENS: 'categories' | 'dishes' | 'summary' | 'ingredient'
export default function App() {
  const [screen, setScreen] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState({}); // { dishId: quantity }
  const [focusedDish, setFocusedDish] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all"); // 'all' | 'veg' | 'nonveg'

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSearchQuery("");
    setFilter("all");
    setScreen("dishes");
  };

  const handleToggleDish = (dish) => {
    setSelectedItems((prev) => {
      const qty = prev[dish.id] || 0;
      if (qty > 0) {
        const updated = { ...prev };
        delete updated[dish.id];
        return updated;
      }
      return { ...prev, [dish.id]: 1 };
    });
  };

  const handleQtyChange = (dishId, delta) => {
    setSelectedItems((prev) => {
      const qty = (prev[dishId] || 0) + delta;
      if (qty <= 0) {
        const updated = { ...prev };
        delete updated[dishId];
        return updated;
      }
      return { ...prev, [dishId]: qty };
    });
  };

  const handleViewIngredient = (dish) => {
    setFocusedDish(dish);
    setScreen("ingredient");
  };

  const totalSelected = Object.keys(selectedItems).length;

  const filteredDishes = useMemo(() => {
    let list = dishes.filter((d) => d.categoryId === selectedCategory?.id);
    if (filter === "veg") list = list.filter((d) => d.isVeg);
    if (filter === "nonveg") list = list.filter((d) => !d.isVeg);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedCategory, filter, searchQuery]);

  const allFilteredDishes = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return dishes.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <button 
            className="header-brand" 
            onClick={() => setScreen("categories")}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="brand-icon">🍽️</span>
            <div>
              <div className="brand-title">Party Menu</div>
              <div className="brand-sub">Build Your Perfect Feast</div>
            </div>
          </button>
          
          {totalSelected > 0 && (
            <button className="header-cart-btn" onClick={() => setScreen("summary")}>
              <span>🛒</span>
              <span className="cart-badge">{totalSelected}</span>
            </button>
          )}
        </div>
      </header>

      {/* Global search results overlay */}
      {searchQuery && screen !== "ingredient" && (
        <div className="global-results">
          <p className="global-results-title">
            {allFilteredDishes.length} result{allFilteredDishes.length !== 1 ? "s" : ""} for "{searchQuery}"
          </p>
          {allFilteredDishes.length === 0 ? (
            <p className="no-results">No dishes found. Try a different keyword.</p>
          ) : (
            <div className="global-results-grid">
              {allFilteredDishes.map((dish) => {
                const cat = categories.find((c) => c.id === dish.categoryId);
                const qty = selectedItems[dish.id] || 0;
                return (
                  <div key={dish.id} className="search-result-card">
                    <div className="src-emoji">{dish.image}</div>
                    <div className="src-info">
                      <div className="src-name">
                        <span className={`dot ${dish.isVeg ? "veg" : "nonveg"}`}></span>
                        {dish.name}
                      </div>
                      <div className="src-cat" style={{ color: cat?.color }}>
                        {cat?.emoji} {cat?.name}
                      </div>
                      <div className="src-price">₹{dish.price}</div>
                    </div>
                    <div className="src-actions">
                      <button className="view-ing-btn-sm" onClick={() => handleViewIngredient(dish)}>
                        Ingredients
                      </button>
                      {qty === 0 ? (
                        <button className="add-btn-sm" onClick={() => handleToggleDish(dish)}>
                          + Add
                        </button>
                      ) : (
                        <div className="qty-ctrl-sm">
                          <button onClick={() => handleQtyChange(dish.id, -1)}>−</button>
                          <span>{qty}</span>
                          <button onClick={() => handleQtyChange(dish.id, 1)}>+</button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      <main className="app-main">
        {/* Breadcrumb nav */}
        {screen !== "categories" && (
          <nav className="breadcrumb">
            <button onClick={() => setScreen("categories")}>🏠 Home</button>
            {(screen === "dishes" || screen === "summary") && (
              <>
                <span className="bc-sep">›</span>
                {screen === "dishes" ? (
                  <span className="bc-active">{selectedCategory?.name}</span>
                ) : (
                  <>
                    <button onClick={() => setScreen("dishes")}>{selectedCategory?.name}</button>
                    <span className="bc-sep">›</span>
                    <span className="bc-active">Summary</span>
                  </>
                )}
              </>
            )}
            {screen === "ingredient" && (
              <>
                <span className="bc-sep">›</span>
                <button onClick={() => setScreen("dishes")}>{selectedCategory?.name}</button>
                <span className="bc-sep">›</span>
                <span className="bc-active">{focusedDish?.name}</span>
              </>
            )}
          </nav>
        )}

        {screen === "categories" && !searchQuery && (
          <MenuCategories
            categories={categories}
            dishes={dishes}
            selectedItems={selectedItems}
            onSelect={handleSelectCategory}
          />
        )}

        {screen === "dishes" && !searchQuery && (
          <DishList
            category={selectedCategory}
            dishes={filteredDishes}
            allDishesInCategory={dishes.filter((d) => d.categoryId === selectedCategory?.id)}
            selectedItems={selectedItems}
            filter={filter}
            onFilterChange={setFilter}
            onToggle={handleToggleDish}
            onQtyChange={handleQtyChange}
            onViewIngredient={handleViewIngredient}
            onViewSummary={() => setScreen("summary")}
            totalSelected={totalSelected}
          />
        )}

        {screen === "summary" && (
          <SelectionSummary
            selectedItems={selectedItems}
            dishes={dishes}
            categories={categories}
            onQtyChange={handleQtyChange}
            onRemove={(id) =>
              setSelectedItems((prev) => {
                const updated = { ...prev };
                delete updated[id];
                return updated;
              })
            }
            onViewIngredient={handleViewIngredient}
            onBack={() => setScreen("dishes")}
            onClearAll={() => setSelectedItems({})}
          />
        )}

        {screen === "ingredient" && focusedDish && (
          <IngredientDetail
            dish={focusedDish}
            category={categories.find((c) => c.id === focusedDish.categoryId)}
            selectedQty={selectedItems[focusedDish.id] || 0}
            onToggle={() => handleToggleDish(focusedDish)}
            onQtyChange={(delta) => handleQtyChange(focusedDish.id, delta)}
            onBack={() => setScreen("dishes")}
          />
        )}
      </main>
    </div>
  );
}
