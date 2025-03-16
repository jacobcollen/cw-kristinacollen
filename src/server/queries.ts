import { db } from "./db";
import "server-only"

export const getNews = async () => {
  const news = await db.query.news.findMany();
  return news;
};
