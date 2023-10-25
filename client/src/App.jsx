import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const AppContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("luxury");
  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "light" : "luxury");
    localStorage.setItem("theme", theme === "luxury" ? "light" : "luxury");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    const userID = localStorage.getItem("userID");
    const hasTheme = localStorage.getItem("theme");
    if (userID) {
      setIsLoggedIn(true);
    }
    if (hasTheme) {
      setTheme(hasTheme);
    }
  });
  return (
    <>
      <AppContext.Provider
        value={{ theme, toggleTheme, isLoggedIn, setIsLoggedIn }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
