import { Link } from "react-router";

const ArticleCard = ({ article }) => {

  return (
    <>
      <li>
        <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
      </li>
    </>
  );
};

export default ArticleCard;
