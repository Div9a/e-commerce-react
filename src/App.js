import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Components/Products";
import ProductsPage from "./Components/ProductsPage";
import Cart from "./Components/Cart";

function App() {
  const [searchData, setSearchData] = React.useState("");

  const [navData, setNavData] = React.useState([
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "PRODUCTS",
    },
    {
      id: 3,
      name: "BEAUTY",
    },
    {
      id: 4,
      name: "ABOUT",
    },

    {
      id: 5,
      name: "CONTACT",
    },
  ]);
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Gaming Laptop",
      price: 40000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhH6Roqj3QsHL5pdt18XQp1PWhJO3DVspAA&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 2,
      name: "Lebron Shoes",
      price: 18000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhwGFw41vwHzslvw_z2FTdMPBxP-lu_IN9A&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 3,
      name: "Giannis Shoes",
      price: 10000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqoPienIS4XQRiXoXQ6uEis9zLtUCPkMYNw&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 4,
      name: "Iphone 13 Max",
      price: 70000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXtF5QVIkNbpcIvlas6eDdfVTAPLCnNNV0Q&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 5,
      name: "Party Heels",
      price: 2000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1_1bMwZyQjGjKuo1DxCCjaplGsaijGNakg&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 6,
      name: "Gaming Headphone",
      price: 5000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2ZlhylJPs6eQJPPB1OjCt2Crtw4xSsheIg&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 7,
      name: "One plus 2t",
      price: 40000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5OTum0Z_apbqE5R_RQnnb_RIsxqA7m5bhA&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
    {
      id: 8,
      name: "Mens Shirt",
      price: 1500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd6Uw11W4tQMuywvCteMOlorFA9m-AN23Jw&usqp=CAU",
      description: "This product provides the best quality and is made of the best material",
    },
  ]);

  const [sliderData, setSliderData] = React.useState([
    {
      id: 1,
      img: "https://rukminim1.flixcart.com/flap/1688/280/image/3cb1ba85d7bd5017.jpg?q=50",
    },
    {
      id: 2,
      img: "https://rukminim1.flixcart.com/flap/1688/280/image/1bf6a427a33007e3.jpg?q=50",
    },
    {
      id: 3,
      img: "https://rukminim1.flixcart.com/flap/1688/280/image/a4770f6394cf8d1c.jpg?q=50",
    },
  ]);
  return (
    <Router>
      <Navbar navData={navData} data={data} setData={setSearchData} />
      <Switch>
      <Route path="/:id/:cartId">
          <Cart data={data} />
        </Route>

        <Route path="/:id">
          <ProductsPage data={data} />
        </Route>

        <Route path="/">
          <Home data={data} sliderData={sliderData} searchData={searchData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
