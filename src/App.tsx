import "remixicon/fonts/remixicon.css";
import Layout from "./components/app/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
