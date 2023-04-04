import React from "react";

const DrawerCart = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина
          <img src="./img/icon/btn-remove.svg" alt="Close" width={24} height={24} />
        </h2>
        <div className="items">
          <div className="cart-item d-flex align-center mb-20">
            <img
              className="mr-20"
              src="./img/products/sneakers_002.jpg"
              alt="Product"
              height={70}
            />
            {/* <div
                style={{ backgroundImage: "url(./img/products/sneakers_002.jpg)" }}
                className="cart-item-img"></div> */}
            <div className="mr-10">
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img src="./img/icon/btn-remove.svg" alt="Remove" width={32} height={32} />
            </button>
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <img
              className="mr-20"
              src="./img/products/sneakers_002.jpg"
              alt="Product"
              height={70}
            />
            {/* <div
                style={{ backgroundImage: "url(./img/products/sneakers_002.jpg)" }}
                className="cart-item-img"></div> */}
            <div className="mr-10">
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img src="./img/icon/btn-remove.svg" alt="Remove" width={32} height={32} />
            </button>
          </div>
        </div>
        <div className="cart-total-block">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="./img/icon/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerCart;
