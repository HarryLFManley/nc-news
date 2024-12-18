import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import Articles from "./Articles";
import Article from "./Article";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article/>}/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
