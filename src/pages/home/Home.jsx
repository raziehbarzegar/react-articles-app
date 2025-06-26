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
      <div className="articles">
        <Container>
          <div className="flex flex-row items-center flex-wrap gap-y-6">
            {articles.slice(0, 4).map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4"
              >
                <Article {...article} />
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-5">
            <Link
              to={"/articles"}
              className="text-lg text-primary text-center py-1 px-3 rounded font-semibold bg-secondary hover:text-secondary hover:bg-white transition-colors duration-500"
            >
              Discover more stories
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
