import http from "../http-common";

const getNews = () => {
  return http.get("/posts");
};

const NewsService = {
  getNews,
};

export default NewsService;