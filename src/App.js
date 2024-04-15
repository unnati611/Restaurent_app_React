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
    path: "/",
    element: <App />,
    children: [
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/payus",
        element: <Payus></Payus>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default App;
