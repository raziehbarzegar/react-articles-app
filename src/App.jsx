import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import ArticlePage from "./pages/articlePage/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticlePage/>}/>
      </Routes>
    </>
  );
}

export default App;
