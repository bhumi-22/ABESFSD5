import { use, useEffect } from "react";
import { useState } from "react";
import "./App.css";
const Header = () => {
  return <div className="header">Header</div>;
};
const Search = ({ filterHandler }) => {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." name="search" id="search" onChange={(e)=>filterHandler(e.target.value)} />
      <button>Search</button>
    </div>
  );
};
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.img} alt="img-here" />
      <h2>{product.title}</h2>
      <h3>Price: ${product.price}</h3>
    </div>
  );
};
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilterData(data);
      })
      .catch((error) => console.error("unable to load data", error));
  }, [])
  const filterHandler = (query) => {
    const data = products.filter(
      (product) => product.title.toLowerCase().includes(query.toLowerCase()));
    setFilterData(data);
   }

  return (
    <div className="body">
      <Search filterHandler={filterHandler} />
      <div className="products">
        {filterData.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">Footer</div>;
};
function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
