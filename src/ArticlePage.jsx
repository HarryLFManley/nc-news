import { useEffect, useState } from "react";
import { addVotes } from "../utils/api";
import { GetArticle } from "../utils/api";
import { useParams } from "react-router-dom";

const ArticlePage = ({ article, comments }) => {
  const { article_id } = useParams();
  const [votes, setVotes] = useState(article.votes);

  useEffect(() => {
    GetArticle(article_id).then((response) => {
      setVotes(response.article.article.votes);
    });
  }, []);

  const HandleVotes = () => {
    addVotes(article_id, { inc_votes: 1 })
      .then((response) => {
        setVotes(response.article.votes);
      })
      .catch(() => {
        setVotes(votes);
      });
  };

  return (
    <>
      <section>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p className="bold">by {article.author}</p>
      </section>

      <p>Votes: {votes}</p>
      <button onClick={HandleVotes}>Vote</button>

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
