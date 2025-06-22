import Home from "../components/Home";
import About from "../components/About";
import Profile from "../components/Profile";
import Product from "../components/Product";
import Service from "../components/Service";
import ServiceDetails from "../components/ServiceDetails";
import ProductDetails from "../components/ProductDetails";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      {/* <Route path="/product/details" element={<ProductDetails />} /> This is the child route for product and is static   */}
      <Route path="/product/details/:name" element={<ProductDetails />} />
      {/* This is a dynamic route for product details & :id is a parameter that can be accessed in ProductDetails component */}
      <Route path="/service" element={<Service />}>
        <Route path="details/:name" element={<ServiceDetails />} /> {}
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
      {/* This is a catch-all route for any undefined paths */}
      {/* You can create a PageNotFound component to handle this */}
    </Routes>
  );
};

export default Mainroute;
