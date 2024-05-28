import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/common/about/About";
import Services from "../components/common/services/Services";
import Contact from "../components/common/contact/Contact";
import Practice from "../pages/Practice";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/practice" element={<Practice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
