// import { createBrowserRouter } from "react-router-dom";
// import SignUp2 from "./SignUp2";
// import Loginpage2 from "./Loginpage2";
// // import Front from "./Front";
// import Home from "./Home";
// import Products from "./Products";
// import Contact from "./Contact";
// import Services from "./Services";
// import AboutUs from "./AboutUs";
// const router = createBrowserRouter([
//   // { path: "/", element: <Front /> },
//   { path: "/home", element: <Home /> },
//   { path: "/signup", element: <SignUp2 /> },
//   { path: "/login", element: <Loginpage2 /> },
//   { path: "/products", element: <Products /> },
//   { path: "/contact", element: <Contact /> },
//   { path: "/services", element: <Services /> },
//   { path: "/aboutus", element: <AboutUs /> },
// ]);
// export default router;

// import { createBrowserRouter } from "react-router-dom";
// import SignUp2 from "./SignUp2";
// import Loginpage2 from "./Loginpage2";
// import Front from "./Front";
// import Home from "./Home";
// import Products from "./Products";
// import Contact from "./Contact";
// import Services from "./Services";
// import AboutUs from "./AboutUs";
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/signup", element: <SignUp2 /> },
//   { path: "/login", element: <Loginpage2 /> },
//   { path: "/home", element: <Home /> },
//   { path: "/products", element: <Products /> },
//   { path: "/contact", element: <Contact /> },
//   { path: "/services", element: <Services /> },
//   { path: "/aboutus", element: <AboutUs /> },
// ]);
// export default router;
import { createBrowserRouter } from "react-router-dom";
import SignUp2 from "./SignUp2";
import Loginpage2 from "./Loginpage2";
import Front from "./Front";
import Home from "./Home";
//import Products from "./Products";
import Contact from "./Contact";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Product from "./Product";
import Cartitems from "./Cartitems";
import Logout from "./Logout";
import GetProducts from "./GetProducts";
import GetCartProducts from "./GetCartProducts";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp2 /> },
  { path: "/login", element: <Loginpage2 /> },
  { path: "/home", element: <Home /> },
  //{ path: "/products", element: <Products /> },
  { path: "/products", element: <GetProducts /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/product", element: <Product /> },
  { path: "/cartItems", element: <Cartitems /> },
  { path: "/logout", element: <Logout /> },
  { path: "/cartItems2", element: <GetCartProducts /> },
]);
export default router;
