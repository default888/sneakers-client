function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="product-card-container">
          <div className="product-card">
            <img src="./img/products/sneakers_001.jpg" alt="product" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="./img/icon/add.svg" alt="add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/products/sneakers_002.jpg" alt="product" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="./img/icon/add.svg" alt="add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/products/sneakers_003.jpg" alt="product" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="./img/icon/add.svg" alt="add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/products/sneakers_004.jpg" alt="product" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="./img/icon/add.svg" alt="add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/products/sneakers_004.jpg" alt="product" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="./img/icon/add.svg" alt="add" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
