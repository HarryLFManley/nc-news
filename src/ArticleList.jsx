import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {

  return (
    <>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
