import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

useEffect(() => {
    getArticles().then(({ articles }) => {
        setArticles(articles)
    })
}, [articles])

  return (
    <>
      <section>
        <ArticleList articles={articles} />
      </section>
    </>
  );
};

export default Articles;
