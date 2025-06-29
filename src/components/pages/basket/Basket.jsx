import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Basket.scss";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();

  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  return (
    <div id="basket">
      <div className="container">
        <h2>🛒 Корзина</h2>
        {basket.length ? (
          <div className="basket__list">
            {basket.map((el) => (
              <div className="basket__item" key={el.id}>
                <img src={el.url} alt={el.name} className="basket__item-img" />
                <div className="basket__item-info">
                  <p>{el.name}</p>
                  <p className="basket__price">{el.price} $</p>
                </div>
                <button
                  className="basket__item-remove"
                  onClick={() => removeFromBasket(el.id)}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="basket__empty">Корзина пуста.</p>
        )}
      </div>
    </div>
  );
};

export default Basket;
