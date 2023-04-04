import DrawerCart from "./components/DrawerCart";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="wrapper clear">
      <DrawerCart />
      <Header />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="./img/icon/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="product-card-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
