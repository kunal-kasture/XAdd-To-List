import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    const trimmed = item.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, trimmed]);
    setItem("");
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2 className="title">Add Items to List</h2>

        <form onSubmit={handleAddItem} className="input-row">
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>

        {items.length === 0 ? (
          <p className="empty-message">No items yet. Add your first one!</p>
        ) : (
          <ul className="item-list">
            {items.map((val, idx) => (
              <li key={idx} className="item-row">
                <span className="item-text">{val}</span>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemoveItem(idx)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
