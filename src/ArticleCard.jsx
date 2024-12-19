import { Link } from "react-router";

const ArticleCard = ({ article }) => {

  return (
    <>
    <hr />
      <li className="article-card">
        <img className="image" src={article.article_img_url} alt={article.title} />
        <section className="text-container">
        <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
        <p className="bold">{article.author}</p>
        </section>
      </li>
    </>
  );
};

export default ArticleCard;
