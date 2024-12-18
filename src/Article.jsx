import { useEffect, useState } from "react";
import { GetArticle } from "../utils/api";
import ArticlePage from "./ArticlePage";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (article_id) {
      GetArticle(article_id).then(({ article, comments }) => {
        setArticle(article.article);
        setComments(comments.comments);
      });
    }
  }, []);

  return (
    <>
      <Link to={`/`}>
        <h2>Home</h2>
      </Link>
      <ArticlePage article={article} comments={comments} />
    </>
  );
};

export default Article;
