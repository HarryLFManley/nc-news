import { useEffect, useState } from "react";
import { GetArticle } from "../utils/api";
import ArticlePage from "./ArticlePage";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState("");

  useEffect(() => {
    if (article_id) {
      GetArticle(article_id).then(({ article }) => {
        setArticle(article);
      });
    }
  }, [article_id]);

  return (
    <>
      <Link to={`/`}><h2>Home</h2></Link>
      <ArticlePage article={article} />
    </>
  );
};

export default Article;
