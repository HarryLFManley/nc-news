import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Articles from "./Articles";

function App() {
  return (
    <>
      <Header />
      <main className="content">
      <Articles />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
