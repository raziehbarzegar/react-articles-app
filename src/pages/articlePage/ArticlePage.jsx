import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import { getArticle } from "../../services/api";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    getArticle(params.id)
      .then((response) => {
        setArticle(response);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, []);
  return (
    <div className="article pt-32">
      <Container className="flex justify-center">
        <div className="flex flex-col w-9/12">
          <div className="titleWrapper">
            <h1 className="font-semibold text-3xl py-2 ">{article.title}</h1>
          </div>

          <div className="info flex gap-x-3 mb-4">
            <span className="text-gray-600">{article.author} </span>
            <span className="text-gray-600">{article.date} </span>
            <span className="text-gray-600">{article.readingTime} minutes</span>
          </div>

          <img src={article.imgUrl} className="article w-full" alt="" />

          <div className="content mt-4 text-lg ">
            <p className="text-justify">{article.content}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ArticlePage;
