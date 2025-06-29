import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/Header";
import Main from "./components/pages/main/Main";
import Sale from "./components/pages/sale/Sale";
import Admin from "./components/pages/admin/Admin";
import Man from "./components/pages/man/Man";
import Women from "./components/pages/woman/Women";
import Kids from "./components/pages/kids/Kids";
import Basket from "./components/pages/basket/Basket";
import Products from "./components/pages/products/Products.jsx";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <Main />,
    },
    {
      id: 2,
      path: "/sale",
      element: <Sale />,
    },
    {
      id: 3,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 4,
      path: "/man",
      element: <Man />,
    },
    {
      id: 5,
      path: "/woman",
      element: <Women />,
    },
    {
      id: 6,
      path: "/kids",
      element: <Kids />,
    },
    {
      id: 6,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 6,
      path: "/products",
      element: <Products />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route element={el.element} path={el.path} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
