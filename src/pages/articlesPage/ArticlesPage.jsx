import React, { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import { getArticles } from "../../services/api";
import Container from "../../components/container/Container";
import { Link } from "react-router";

function ArticlesPage() {
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
    <Container>
      <div className="flex flex-row items-center flex-wrap gap-y-6 pt-36">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4"
          >
            <Article {...article} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default ArticlesPage;
