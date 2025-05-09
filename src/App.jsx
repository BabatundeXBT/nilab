import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import WorkPage from "./components/pages/WorkPage";
import BlogPage from "./components/pages/BlogPage";
import AboutPage from "./components/pages/AboutPage";
import QuotePage from "./components/pages/QuotePage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
