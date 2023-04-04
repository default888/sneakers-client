import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-between	align-center p-40">
      <div className="d-flex align-center">
        <img src="./img/icon/logo.svg" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img src="./img/icon/cart.svg" alt="logo" width={18} height={18} />
          <span>1205 р.</span>
        </li>
        <li>
          <img src="./img/icon/user.svg" alt="logo" width={20} height={20} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
