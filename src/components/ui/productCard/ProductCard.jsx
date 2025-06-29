import React from "react";
import "./ProductCard.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { name, price, url, category } = product;
  const dispatch = useDispatch();

  const AddToBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  return (
    <div className="card">
      <img src={url} alt={name} className="card__image" />
      <div className="card__info">
        <h3>{name}</h3>
        <p>{price} $</p>
      </div>
      <div className="card__footer">
        <span>{category}</span>
        <button onClick={AddToBasket}>
          <MdOutlineShoppingCart size={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
