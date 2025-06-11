import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/article/Article";
import Header from "../../components/header/Header";
import Container from "../../components/container/Container";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <div className="articles" id="articles">
        <Container>
          <div className="flex flex-row items-center flex-wrap gap-y-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4 "
              >
                <Article
                  imgUrl={article.imgUrl}
                  title={article.title}
                  author={article.author}
                  date={article.date}
                  readingTime={article.readingTime}
                />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
