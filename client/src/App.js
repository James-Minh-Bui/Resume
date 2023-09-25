import React from "react"
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar.js';
import Footer from "./components/footer.js"
import Portfolio from "./pages/Portfolio.js";
// import { ThemeProvider } from "@material-ui/core";
// import { theme } from "./theme"

export default function App() {
    return (
        <div id="page">
          <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path="/" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
          </BrowserRouter>
        </div>
    )
}