import React from "react";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-favorite">
        <img src="./img/icon/heart-unliked.svg" alt="unliked" width={32} height={32} />
      </div>
      <div className="d-flex aling-center justify-center">
        <img src="./img/products/sneakers_001.jpg" alt="product" width={133} height={112} />
      </div>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="./img/icon/btn-add.svg" alt="add" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
