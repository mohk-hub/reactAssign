import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Keeper } from './components/keeper/Keeper';
import { Contact } from './components/contact/Contact';
import { Registration } from './components/registration/Registration';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" exact element={<Keeper />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/registration" exact element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
