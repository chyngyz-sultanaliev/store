import React, { useState } from "react";
import "./Admin.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    url: "",
    category: "MAN",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const categories = ["MAN", "WOMAN", "KIDS", "SALE"];

  const setProduct = () => {
    if (!form.name.trim() || !form.price.trim() || !form.url.trim()) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    dispatch({
      type: "ADD_PRODUCT",
      payload: { ...form, id: Date.now() },
    });

  };

  return (
    <div className="admin-panel">
      <h1 className="admin-panel__title">Admin Panel</h1>
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="modal__title">Добавить продукт</h2>
          <input
            type="text"
            placeholder="Название"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Цена"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL изображения"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div className="modal__actions">
            <button className="modal__cancel" onClick={() => nav("/")}>
              Отмена
            </button>
            <button className="modal__confirm" onClick={setProduct}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
