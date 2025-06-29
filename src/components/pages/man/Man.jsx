import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ui/productCard/ProductCard";
import "./Man.scss";
const Man = () => {
  const { product } = useSelector((state) => state);

  const manProducts = product.filter((item) => item.category === "MAN");

  return (
    <div id="man">
      <div className="container">
        <div className="man">
          {manProducts.length ? (
            manProducts.map((el) => <ProductCard product={el} key={el.id} />)
          ) : (
            <p>Нет товаров в категории MAN.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Man;
