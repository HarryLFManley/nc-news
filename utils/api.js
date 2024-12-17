import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-gca0.onrender.com",
});

export const getArticles = () => {
  return newsApi.get("/api/articles").then((response) => {
    return response.data;
  });
};
