// src/components/Header.js
import React from "react";

export default function Header({ selectedItemsCount = 0, onCartClick, searchQuery, onSearchChange }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <a href="#" className="header-brand" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
          <span className="brand-icon">🍽️</span>
          <div>
            <div className="brand-title">Party Menu</div>
            <div className="brand-sub">Make It Delicious</div>
          </div>
        </a>
        
        <div className="header-search">
          <span className="search-icon-header">🔍</span>
          <input
            type="text"
            className="header-search-input"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>

        <button className="header-cart-btn" onClick={onCartClick}>
          <span>🛒</span>
          <span className="cart-label">Cart</span>
          {selectedItemsCount > 0 && (
            <span className="cart-badge">{selectedItemsCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
