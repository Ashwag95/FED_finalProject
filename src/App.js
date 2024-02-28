import "./App.css";

import React from "react";
import Home_Page from "./Home_page";

import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
        <Home_Page />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
