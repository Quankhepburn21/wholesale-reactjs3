import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Detail from "./Pages/Detail.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Comps/Components/AuthPage/AuthLogin";
import Register from "./Comps/Components/AuthPage/AuthRegister";
import Shop from "./Pages/Shop.jsx";
import Layout from "./Comps/Components/Layout/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Layout><Home /></Layout>} />
        <Route exact path="/shop" element={<Layout><Shop /></Layout>} />
        <Route exact path="/shop/:category" element={<Layout><Shop /></Layout>} />
        <Route path="/detail/:id" element={<Layout><Detail /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
      </Route>
    )
  )
  return (<RouterProvider router={router} />);
}
export default App;
