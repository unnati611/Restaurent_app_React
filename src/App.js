import { createBrowserRouter, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Payus from "./components/Payus";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export const Approute = createBrowserRouter([
  {
    path: "/Restaurent_app_React/",
    element: <App />,
    children: [
      {
        path: "/Restaurent_app_React/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/Restaurent_app_React/",
        element: <Home />,
      },
      {
        path: "/Restaurent_app_React/about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/Restaurent_app_React/payus",
        element: <Payus></Payus>,
      },
      {
        path: "/Restaurent_app_React/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default App;
