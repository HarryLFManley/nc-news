
const ArticlePage = ({ article }) => {

    return (
        <>
        <section>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt="" />
            <p>{article.body}</p>
            <p>by {article.author}</p>
        </section>
        </>
    )
}

export default ArticlePage