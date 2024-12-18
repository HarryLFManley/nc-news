const ArticlePage = ({ article, comments }) => {

  return (
    <>
      <section>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p className="bold">by {article.author}</p>
      </section>

      <h3>Comments</h3>
      <hr />

      {comments.map((comment, index) => (
        <section key={index} className="comments">
          <p className="bold">{comment.author}</p>
          <p className="small-text">{comment.created_at}</p>
          <p>{comment.body}</p>
          <hr />
        </section>
      ))}
    </>
  );
};

export default ArticlePage;
