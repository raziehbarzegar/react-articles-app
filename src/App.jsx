import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import ArticlePage from "./pages/articlePage/ArticlePage";
import Layout from "./components/layout/Layout";
import Register from "./pages/register/Register";
import ArticlesPage from "./pages/articlesPage/ArticlesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
