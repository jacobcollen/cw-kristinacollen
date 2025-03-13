import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";

// Skapar tabeller med prefix "jcbcollen_" för tydlighet
export const createTable = pgTableCreator((name) => `jcbcollen_${name}`);

export const news = createTable(
  "news",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    title: varchar("title", { length: 256 }).notNull(),
    text: text("text").notNull(),
    imageUrl: text("image_url"),
    link: text("link"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (news) => ({
    titleIndex: index("news_title_idx").on(news.title),
  }),
);
