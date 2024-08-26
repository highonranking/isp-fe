import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Plans from "./components/Plans";
import PromoSection from "./components/Promotions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
     <Plans/>
     <PromoSection/>
     <Footer/>
    </div>
  );
};

export default App;
