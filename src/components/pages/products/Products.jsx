import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ui/productCard/ProductCard";
import "./Products.scss";


const Products = () => {
  const { product } = useSelector((s) => s);
  const [sortType, setSortType] = useState("default");

  const sortedProducts = [...product].sort((a, b) => {
    switch (sortType) {
      case "price-asc":
        return +a.price - +b.price;
      case "price-desc":
        return +b.price - +a.price;
      case "name-asc":
        return a.name.localeCompare(b.name, "ru");
      case "name-desc":
        return b.name.localeCompare(a.name, "ru");
      default:
        return 0;
    }
  });

  return (
    <div id="all-products">
      <div className="container">
        <div className="sort">
          <label>Сортировать: </label>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="default">По умолчанию</option>
            <option value="price-asc">Цена: дешевые → дорогие</option>
            <option value="price-desc">Цена: дорогие → дешевые</option>
            <option value="name-asc">Название: A → Я</option>
            <option value="name-desc">Название: Я → A</option>
          </select>
        </div>

        <div className="products">
          {sortedProducts.map((el) => (
            <ProductCard product={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
