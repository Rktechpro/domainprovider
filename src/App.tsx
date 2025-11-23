import "remixicon/fonts/remixicon.css";
import Layout from "./components/app/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import Footer from "./components/app/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
