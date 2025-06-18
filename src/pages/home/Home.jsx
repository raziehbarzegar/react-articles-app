import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import { getArticles } from "../../services/api";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
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
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Article {...article} />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
