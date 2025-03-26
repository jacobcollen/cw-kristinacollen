export interface NewsItem {
  id: number;
  title: string;
  text: string;
  imageUrl: string | null;
  link: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface NewsFeedProps {
  news: NewsItem[];
}
