import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Menu from "./pages/Menu.js";
import About from './pages/About.js';
import Contact from "./pages/Contact.js";
import Splash from './pages/Splash.js';

const App = () => {
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowSplash(false);
      }, 3000); 
      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          {!showSplash && <Navbar />}
          <Routes>
            {showSplash ? (
              <Route path="/" element={<Splash />} />
            ) : (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/*"
                  element={
                    <Navigate
                      to="/home"
                      state={{
                        showAlert: true,
                        alertMessage: "Invalid Path! Redirecting to Home Page",
                      }}
                    />
                  }
                />
              </>
            )}
          </Routes>
          {!showSplash && <Footer />}
        </BrowserRouter>
      </div>
    </div>
  );

}

export default App;
