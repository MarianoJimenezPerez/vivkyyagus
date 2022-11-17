import React from "react";
import ActionSection from "./components/ActionSection";
import DataSection from "./components/DataSection";
import Footer from "./components/Footer";
import Gift from "./components/Gift";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoSection from "./components/PhotoSection";

const App = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <DataSection />
      <PhotoSection />
      <ActionSection />
      <Gift />
      <Footer />
    </main>
  );
};

export default App;
