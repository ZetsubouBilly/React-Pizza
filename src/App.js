import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import logo from "./logo.svg";
import "./scss/app.scss";
import Sort from "./components/Sort/Sort.jsx";
// import pizzas from './pizzas/pizzas.json'
import PizzaBlock from "./components/PizzaBlock/PizzaBlock.jsx";
import { useEffect, useState } from "react";


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://62ced2ef486b6ce8264d6eb9.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr)
    });
  }, []);

  return (
    <div classNameName="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
             {/* <PizzaBlock /> */}
             {
              items.map(obj => (
                <PizzaBlock key={obj.id} {...obj}/>
              ))
             }
             
      </div>
            <ul className="Pagination_root__uwB0O">
              <li className="previous disabled">
                <a
                  className=" "
                  tabindex="-1"
                  role="button"
                  aria-disabled="true"
                  aria-label="Previous page"
                  rel="prev"
                >
                  &lt;
                </a>
              </li>
              <li className="selected">
                <a
                  rel="canonical"
                  role="button"
                  tabindex="-1"
                  aria-label="Page 1 is your current page"
                  aria-current="page"
                >
                  1
                </a>
              </li>
              <li>
                <a rel="next" role="button" tabindex="0" aria-label="Page 2">
                  2
                </a>
              </li>
              <li>
                <a role="button" tabindex="0" aria-label="Page 3">
                  3
                </a>
              </li>
              <li className="next">
                <a
                  className=""
                  tabindex="0"
                  role="button"
                  aria-disabled="false"
                  aria-label="Next page"
                  rel="next"
                >
                  &gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
