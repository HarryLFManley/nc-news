import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-gca0.onrender.com",
});

export const getArticles = () => {
  return newsApi.get(`/api/articles`).then((response) => {
    return response.data;
  });
};

export const GetArticle = (article_id) => {
  return Promise.all([
    newsApi.get(`/api/articles/${article_id}`),
    newsApi.get(`/api/articles/${article_id}/comments`),
  ]).then(([articleResponse, commentsResponse]) => {
    return {
      article: articleResponse.data,
      comments: commentsResponse.data,
    };
  });
};

export const addVotes = (article_id, votes) => {
  return newsApi.patch(`/api/articles/${article_id}`, votes).then((response) => {
    return response.data
  })
}
